import React, { createContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
export const PlayerContext = createContext()

const PlayerContextProvider = (props) =>{

    const audioRef = useRef()
    const seekbg = useRef()
    const seekBar = useRef()

    const url = import.meta.env.VITE_BACKEND_URL
    const [songsData, setSongData] = useState([])
    const [albumsData, setalbumData] = useState([])
    const [track, setTrack] = useState(songsData[1])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () =>{
        audioRef.current.play()
        setPlayStatus(true)
    }

    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
    }

    const playWithId = async(id) => {
        await songsData.map((item)=>{
            if(id === item._id){
                setTrack(item)
            }
        })
        await audioRef.current.play();
        setPlayStatus(true)
    }

    const previous = async () => {
        songsData.map(async (item,index) => {
            if(track._id === item._id && index>0){
                await setTrack(songsData[index-1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        })
    }

    const nextSong = async () => {
        songsData.map(async (item,index) => {
            if(track._id === item._id && index < songsData.length){
                await setTrack(songsData[index+1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        })
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg .current.offsetWidth)*audioRef.current.duration)
    }

    const getSongData = async () =>{
        try {
            const response = await axios.get(`${url}/api/song/list`);
            setSongData(response.data.songs)
            setTrack(response.data.songs[0])
        } catch (error) {
            
        }
    }

    const getAlbumData = async () =>{
        try {
            const response = await axios.get(`${url}/api/album/list`);
            setalbumData(response.data.albums)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000);
    },[audioRef])

    useEffect(()=>{
        getSongData();
        getAlbumData();
    },[])

    const contextValue = {
        audioRef,
        seekBar,
        seekbg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,
        nextSong,
        seekSong,
        songsData,
        albumsData
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider

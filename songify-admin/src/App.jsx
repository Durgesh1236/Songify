import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route} from 'react-router-dom';
import AddSong from './pages/AddSong'
import AddAlbum from './pages/AddAlbum';
import ListSong from './pages/ListSong';
import ListAlbum from './pages/ListAlbum';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Login from './Components/Login';

 export const url = 'http://localhost:4000'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>
      {
        token === "" ? 
        <Login setToken={setToken} />
        : <>
        <Sidebar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
      <Navbar setToken={setToken} />
        <div className="PT-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path='/add-song' element={ <AddSong /> } />
            <Route path='/add-album' element={ <AddAlbum /> } />
            <Route path='/list-song' element={ <ListSong /> } />
            <Route path='/list-album' element={ <ListAlbum /> } />
          </Routes>
        </div>
      </div>
        </>
      }
    </div>
  )
}

export default App

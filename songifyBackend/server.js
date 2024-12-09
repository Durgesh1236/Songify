import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloundinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';
import userRouter from './src/routes/userRoute.js';

// app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloundinary();


// middleware
app.use(express.json());
app.use(cors());


// initializing routes
app.use("/api/song", songRouter);
app.use('/api/album', albumRouter)
app.use('/api/user', userRouter)

app.get('/', (req,res)=> res.send("API Working"))

app.listen(port, ()=>console.log(`Server started on ${port}`))
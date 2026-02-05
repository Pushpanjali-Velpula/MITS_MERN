const express=require('express');
const todoRoute=require('./router/todoRouter');
const dotenv=require('dotenv');
const userRoute=require('./router/userRouter');
const connectDB=require('./config/db');
const cors=require('cors');

dotenv.config();
const app=express();
app.use(cors());
connectDB();

app.use(express.json());
app.use('/api/todo', todoRoute);
app.use('/api/user', userRoute);

const PORT= process.env.PORT ||5000;
app.listen(5000,()=>{
    console.log(`server is running at port http://localhost:${5000}`);
})




// app.get('/',(req,res)=>{
//     res.send('Get Route is working');
// });
// app.post('/create',(req,res)=>{
//     res.json({
//         message:'Post Route is working'
//     });
// });
// app.put("/",(req,res)=>{
//     res.status(200).json({
//         message:"Put Route is working"
//     });
// })
// app.delete("/",(req,res)=>{
//     res.status(200).json({
//         message:"Delete Route is working"
//     });
// });
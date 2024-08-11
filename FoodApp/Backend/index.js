// const express=require('express');
// const mongoDB=require('./database')
// const app=express();
// // const createuser=require('./Routes/CreateUser');
// const port=process.env.port ||  5000;

// mongoDB();

// app.use(express.json());
// app.use('/api',require('./Routes/CreateUser'));

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello world</h1>")
// })

// app.listen(port,()=>{console.log(`server is listening on port ${port}`)});  

const express = require('express');
const mongoDB = require('./database');
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

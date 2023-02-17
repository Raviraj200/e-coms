const app = require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");

// Handing Uncaught Exception

process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
console.log(`Shutting down the server due to Uncaught Exception`);
prompt.exit(1);
    
})


//config
dotenv.config({path:"backeng/config/config.env"});


// database 

connectDatabase()

const server=app.listen(process.env.PORT,()=>{
    console.log(`Srever is working on http://localhost:${process.env.PORT}`)
});

// unandled promise rejection

process.on("unhandledRejection",err=>{
console.log(`Error:${err.message}`);

console.log(`Shutting down the server due to Unhandled promise Rejection`);
server.close(()=>{
    process.exit(1);
})

})
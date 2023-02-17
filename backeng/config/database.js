const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        //  useNewUrlParser: true, useUnifiedTopologt: true, useCreateIndex: true 
        }).then((data) => {
        console.log(`mongodb connected with server:${data.connection.host}`);
  
    })

}
module.exports = connectDatabase;
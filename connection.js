const mongoose =require("mongoose");
require("dotenv").config();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.t3t0nvc.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
    console.log("connetcion mongodb")
})

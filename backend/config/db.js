const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo URI:", process.env.MONGODB_URI);
        
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB
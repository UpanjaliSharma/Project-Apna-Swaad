const mongoose=require("mongoose")

const connectDb=async()=>{
    try {
        const connectionInstance = await mongoose.connect(
          `${process.env.CONNECTION_STRING}`
          
        );
        console.log(
          `MongoDB connected successfully with host : ${connectionInstance.connection.host}`
        );
      } catch (error) {
        console.log(`MongoDB connection failed... Error : ${error}`);
        process.exit(1);
      }

}

module.exports=connectDb
import express from "express"
import 'dotenv/config.js'
import ConnectDatabase from "../Db/connect.js";
const app = express();
ConnectDatabase();
app.get('/',(req,res)=>{
    res.send("this is sucessfully build");
});
app.listen(process.env.PORT,function(error){
      if(error) console.log(error);
      console.log("your app is listen in ",process.env.PORT);
})
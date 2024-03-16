import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const port=3000;
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.get("/",(req,res)=>
{
    res.render("index.ejs",{ content:""});

})

app.post("/submit",async(req,res)=>{
   try{

    const country=req.body.country;
    const result=await axios.get("http://universities.hipolabs.com/search?country="+country);
    const response=result.data;
   
    res.render("index.ejs", { content: response});
   }
   catch(error){
    res.render("index.ejs", { content: JSON.stringify(error.result.data) });
}
}
);



app.listen(3000,()=>
{
    console.log("listening on port 3000");
})
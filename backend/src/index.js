require('dotenv').config();
const db = require("../config/db");

const express = require('express');
const app = express();

app.get("/", async (req, res)=>{
    try{
        return res.json({message:'banckend is running'})
    } catch(error){
        return res.json({message:'banckend not running'})
    }
});

app.listen(process.env.PORT || 4000);
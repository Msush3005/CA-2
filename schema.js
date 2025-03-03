const mongoose=require('mongoose');
const schema=mongoose.schema;

const appschema=new mongoose.schema({
    
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true,
        unique:true
    },
    price:{
        type:Number,
        require:true,
        unique:true
    },
    cusine:{
        type:String,
        require:true,
        unique:true
    },
    menu:{
        type:String,
        require:true,
        unique:true
    }

})
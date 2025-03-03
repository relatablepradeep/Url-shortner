const mongoose =require('mongoose');



const urlSchema=new mongoose.Schema(
    {
        //short url

        ShortId:{
            type:String,
            required:true,
            unique:true,
        },

        //original url

        RedirectURL:{
            type:String,
            required:true,
        },

        //time when a url get clicked

        visitHistory:[
            {
                timestamp:{type:Number}
            }
        ],

        createdby:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }

    },{timestamps:true}
);


const URL =mongoose.model('URL',urlSchema);

module.exports=URL;
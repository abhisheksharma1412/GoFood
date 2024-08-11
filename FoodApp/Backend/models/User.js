const mongoose=require('mongoose');
const {Schema}=mongoose;


//schema perform validation on our mongodb datebase, because mongodb is schema less databsse,

const UserSchema=new Schema({
    
       name: {
        type:String,
        required:true
       },
    
        location:{
            type:String,
            required:true
        },
        
        email:{
            type:String,
            required:true
        },

        password:{
            type:String,
            required:true
        },
        
        date:{
            type:Date,
            default:Date.now()
        }
    }

)


//model is wrapper around our mongodb schema, with the help of model, we can perform crud operation on mongodb, in below example it creates collection of name "user" in mongodb database


module.exports=mongoose.model('user',UserSchema);


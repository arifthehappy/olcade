const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({

     email: {
        type: String,
        required: true,
        max: 50,
    },
    name:{
        type: String,
        max: 50,
        required:true
    },
    subject:{
        type: String
    },
    message:{
        type:String
    },
    query:{
        type: String
    }

},{
    timestamps:true
}
);

module.exports = mongoose.model("ContactSchema",ContactSchema);

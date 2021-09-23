const router = require('express').Router();
const ContactUs = require('../model/Contactus');

//post query Message
router.post("/",async(req,res)=>{
    const newMessage = new ContactUs(req.body);

    try{
        const savedMessage = await newMessage.save();
        console.log(savedMessage)
        res.status(200).json(savedMessage);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;
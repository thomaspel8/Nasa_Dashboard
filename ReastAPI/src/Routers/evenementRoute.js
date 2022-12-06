const express = require("express")
const evenement = require("./../models/evenement")

const router = express.Router();

//here we create our Route

router.post("/evenement", async (req,res)=>{
    console.log(req.body)
    const data = new evenement(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message:"Event not register successfully..."
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"Event register successfully...",
            data:result
        })
    }
})

//get records
router.get("/evenement", async(req, res) =>{
    try{
        const result = await evenement.find()
        if(!result){
            res.json({
            status:"FAILED",
            message:"Not found event"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Events found",
                data:result
            })
        }
    }
    catch(e){
        console.log(e)
    }
})

//get single record
router.get("/evenement/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const result = await evenement.findById(_id);
        if(!result){
            res.json({
            status:"FAILED",
            message:"Event not found on this ID"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Event found",
                data:result
            })
        }
    }
    catch(e){
        res.send(e)
    }
})

//update records
router.put("/evenement/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const  result = await evenement.findByIdAndUpdate(_id,req.body,{new: true});
        if(!result){
            res.json({
            status:"FAILED",
            message:"Event not Updated succesfully..."
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Event is Updated succesfully...",
                data:result
            })
        }
    }
    catch(e){
        res.send(e)
    } 
})

//delete records
router.delete("/evenement/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const result = await evenement.findByIdAndDelete(_id);
        if(!result){
            res.json({
            status:"FAILED",
            message:"Event not Delete succesfully..."
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Event is Delete succesfully...",
                data:result
            })
        }
    }
    catch(e){
        res.send(e)
    }
    
})


module.exports = router
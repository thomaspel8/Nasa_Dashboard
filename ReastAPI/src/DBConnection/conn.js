const mongoose =  require('mongoose')

mongoose.connect("mongodb://localhost:27017/evenement")
.then(()=>{
    console.log("connection is setup successfully...")
}).catch((err)=>{
    console.log("connection not setup")
    console.log(err)
})
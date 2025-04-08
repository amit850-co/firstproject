let express= require('express');
require('dotenv').config();
let cors= require('cors');
let mongoose= require('mongoose');
const enqrouter = require('./APP/Routrs/web/enquaryrout');

let app= express();
app.use(cors())
app.use(express.json());

app.use('/api/website/enquiry',enqrouter)

mongoose.connect(process.env.DBURL).then( ()=>{
console.log("connected to mongodb");
app.listen(process.env.PORT||3000,()=>{
    console.log("server is running ");
    
})

}).catch((err)=>{console.log(err)
})
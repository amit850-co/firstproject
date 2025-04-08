const enquiremodel = require("../../models/Enquary.model");


let enquiryInsert=(req,res)=>{

    let {name,email,phone,message}=req.body;
    
     let enq= new enquiremodel({
        name,
        email,
        phone,
        message
     });
     enq.save().then(()=>{
      res.send({status:1,message:"Enquiry saved successfully"});
     
     }).catch((err)=>{
      res.send({status:0,message:"Enquiry while saving Enquiry",error:err
      });
      
     })
    }
    const deleteEnquiry = async (req, res) => {
        try {
          const id = req.params.id;
          await enquiremodel.findByIdAndDelete(id);

          res.status(200).json({ message: "Enquiry deleted successfully" });
        } catch (error) {
          res.status(500).json({ error: "Failed to delete enquiry" });
        }
      };
      
      // UPDATE
      const updateEnquiry = async (req, res) => {
        try {
          const id = req.params.id;
          const updatedData = req.body;
      
          const updated = await enquiremodel.findByIdAndUpdate(id, updatedData, { new: true });

      
          res.status(200).json(updated);
        } catch (error) {
          res.status(500).json({ error: "Failed to update enquiry" });
        }
      };
    


let enquarylist= async(req,res)=>{
    let enquiry= await enquiremodel.find()
   
        res.send({status:1,enquirylist:enquiry});

   
}
module.exports={enquiryInsert,enquarylist,deleteEnquiry,updateEnquiry}
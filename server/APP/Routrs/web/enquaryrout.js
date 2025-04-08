let express = require('express');
const {
  enquiryInsert,
  enquarylist,
  deleteEnquiry,
  updateEnquiry,
} = require('../../controlers/web/enquarycontrol');

let enqrouter = express.Router();

enqrouter.post("/insert", enquiryInsert);
enqrouter.get("/view", enquarylist);
enqrouter.delete("/delete/:id", deleteEnquiry);
enqrouter.put("/update/:id", updateEnquiry);

module.exports = enqrouter;

const {Router} = require("express")
const { createContact, getContact, updateContact } = require("../controller/conatctController");


const contactRoute = Router();

contactRoute.post('/create',createContact);
contactRoute.get('/get',getContact);
contactRoute.put('/update/:id',updateContact)

module.exports = contactRoute;
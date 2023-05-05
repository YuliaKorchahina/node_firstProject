const contactsService = require("./index");

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case "getContactById":
      const contactById = await contactsService.getContactById(id);
      return console.log(contactById);
    case "add":
      const newContact = await contactsService.add({ name, email, phone });
      return console.log(newContact);
  }
};
invokeActions({ action: "list" });
// invokeActions({action:'getContactById', id:'AeHIrLTr6JkxGE6SN-0Rw'})
// invokeActions({action:"add", name: "Finic", email: "Finic@com.ua", phone:"093"})

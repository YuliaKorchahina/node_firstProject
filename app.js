const contactsService = require("./index");

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case "getContactById":
      const contactById = await contactsService.getContactById(id);
      return console.log(contactById);
    case "addContact":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone
      });
      return console.log(newContact);
    case "removeContact":
      const deletedContact = await contactsService.removeContact(id);
      return console.log(deletedContact);
  }
};
// invokeActions({ action: "listContacts" });
// invokeActions({action:'getContactById', id:'AeHIrLTr6JkxGE6SN-0Rw'})
// invokeActions({action:"add", name: "Finik", email: "Finic@com.ua", phone:"093"})
invokeActions({action: "removeContact", id: "1"})
const { program } = require("commander");

const contactsService = require("./index");

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.table(allContacts);
    case "get":
      const contactById = await contactsService.getContactById(id);
      return console.log(contactById);
    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone
      });
      return console.log(newContact);
    case "remove":
      const deletedContact = await contactsService.removeContact(id);
      return console.log(deletedContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const option = program.opts();
invokeActions(option);


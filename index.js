const contactOperations = require("./db/contacts");

const { program } = require("commander");
// const { Command } = require("commander");
// const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// (async () => {
//   try {
//     // const contacts = await contactOperations.listContacts();
//     // console.log(contacts);

//     const contactId = 4;

//     // const oneContact = await contactOperations.getContactById(contactId);
//     // console.log(oneContact);

//     // const removeContact = await contactOperations.removeContact(contactId);
//     // console.log(removeContact);

//     const addContact = await contactOperations.addContact(name, email, phone);
//     console.log(addContact);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactOperations.listContacts();
      break;

    case "get":
      contactOperations.getContactById(id);
      break;

    case "add":
      contactOperations.addContact(name, email, phone);
      break;

    case "remove":
      contactOperations.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

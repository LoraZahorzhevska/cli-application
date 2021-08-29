const contactOperations = require("./db/contacts");

(async () => {
  try {
    // const contacts = await contactOperations.listContacts();
    // console.log(contacts);

    const contactId = 4;

    // const oneContact = await contactOperations.getContactById(contactId);
    // console.log(oneContact);

    // const removeContact = await contactOperations.removeContact(contactId);
    // console.log(removeContact);

    // const data = {
    //  "name": "Harry Potter",
    //  "email": "est@utquamvel.net",
    //  "phone": "(602) 802-2049"
    // },

    const addContact = await contactOperations.addContact(name, email, phone);
    console.log(addContact);
  } catch (error) {
    console.log(error.message);
  }
})();

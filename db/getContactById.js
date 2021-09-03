const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const selectContact = contacts.find(
      (item) => item.id === Number(contactId)
    );
    if (!selectContact) {
      throw new Error(`Contact with id ${contactId} not found`);
    }
    console.table(selectContact);
    return selectContact;
  } catch (error) {
    throw error;
  }
};

module.exports = getContactById;

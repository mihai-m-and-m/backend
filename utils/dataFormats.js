/******************************
 ** Data formats validations **
 ******************************/
const { error_set } = require("../errors/error_logs");
const { settings } = require("../settings");

/**
 ** Validate Email address for resolvers
 * @param {string} email - email address
 * @returns email address if valid
 */
const validEmail = (email) => {
  const validEmail = /^\w+([\.-] ?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(validEmail)) return email;
  else return error_set("checkValidEmail", email);
};

/**
 ** Validate ID format for MongoDB and UUIDv4 for Sequalize
 * @param {*} id - MongoDB specific ID or UUIDv4 for MySQL
 * @returns id if valid
 */
const validDBID = (id) => {
  if (settings.database === "mongodb") {
    const mongodbID = /^[0-9a-fA-F]{24}$/;
    if (id.toString().match(mongodbID)) return id;
    else return error_set("checkValidID", id);
  }

  if (settings.database === "mysql") {
    const UUIDv4 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
    if (id.toString().match(UUIDv4)) return id;
    else return error_set("checkValidID", id);
  }
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = { validEmail, validDBID };

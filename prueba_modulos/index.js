const { getRandomName } = require("./nameGenerator");
const { greet } = require("./salutation");

const radomName = getRandomName();
greet(radomName);

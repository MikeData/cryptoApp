const data = require('../data/users.json');

const feedUsers = () => {
    let users = JSON.parse(data);
    return users;
}

module.exports = feedUsers;
const axios = require('axios')

async function getData() {
    try {
        return await axios.get('https://api.github.com/users/diegoarmiliato');
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

module.exports = { getData }
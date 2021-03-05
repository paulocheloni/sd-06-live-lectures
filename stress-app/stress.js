const axios = require('axios');

for (let index = 0; index < 1000; index++) {
  axios.get('http://localhost:3000').then(resp => console.log(resp.data))  
}
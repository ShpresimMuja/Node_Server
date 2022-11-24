
var http = require('http');
const axios = require('axios');
const { json } = require('body-parser');




let url = 'http://localhost:8080'

let body = JSON.stringify({
  id: 1,
  deviceID: 2,
  taskType: 'coinPrice',
  FCM: 200,
  taskInfo: 
  { Coin: 'Bitcoin', Price: 30000 }

});

var authOptions = {
 method: "post",
 url: url,
 data: body,
 headers: {
   "Content-Type": "application/json",
 },
 json: true,
};

axios(authOptions)
 .then((resp) => {
   console.log("response :- ",resp.data);
 })
 .catch((error) => {
   console.log(error)
 });


























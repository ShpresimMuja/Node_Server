const express = require('express')
const { json } = require('express/lib/response')
const bodyParser = require('body-parser');
const app = express()

const task = require('./Task');
const admin = require('./admin')
const runCronJobs = require('./utils').runCronJobs;








const db = require('./tasks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const connect = require('./Database.js');
const GetPrice = require('./GetPrice');


const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};


const  registrationToken = 'fT2PfbDLQfub-zis7MIBUa:APA91bG-F8xWllT6LEN11R4rtjzU3EqTUUW4Sflmqqxg90jTm1xMYKlEH0O_qU9tuwlGQcpck17vdXiL89BG8K2qWf6aF5T2au9nMCXGJMp8bH0nYwv8HLcX7VaHQqMy84a4jnbitSrA'
const message ={
  data: {
    account: "Savings",
    balance: "$3020.25"
  }
};
  
const options =  notification_options

  admin.admin.messaging().sendToDevice(registrationToken, message, options)
  .then( response => {
   
  })
  .catch( error => {
      console.log(error);
  });



// Call start

let arr = [
  'Bitcoin'


]

runCronJobs(arr)






const port = 8080











app.get('/', async (req, res, next)=>
{

  let result = await db.getAllTasks();

  //let obj = await db.deleteTask('name');

  

  console.log(result);


    
       res.json(result);


})

app.post('/', async (req, res, next) =>{

  const result = await db.createTask(req.body);

  console.log(result);

  res.json({id : result[0]})


    next()

    

}
)

app.delete('/', (req, res)=>{

  console.log(req.body)

  let index = req.body

  console.log(index.id);

  db.deleteTask(Number(index.id));

  res.sendStatus(200);





})









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







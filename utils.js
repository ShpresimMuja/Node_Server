const GetPrice = require("./GetPrice");
const cron = require('node-cron')

async function priceIsEqual (price,target)
{

  


  console.log(price);

  var difference =  Math.abs(price - target);


  console.log(difference);

  var percentege =(difference * 100)/target


  console.log('percentage ' + percentege);

  if(percentege < 0.05)
  {
    console.log('nombers are basically equal');
    return true;
     


  }
  return false;
}
async function runCronJobs(tasks)
{

    for(let i = 0; i < tasks.length;i++)
    {
        
        cron.schedule('* * * * *', async function(){

            
            
        let price =  await GetPrice(tasks[i])
        let isReachd = await priceIsEqual(price, 15740)

        if(isReachd){

            console.log('condition resolved')

        }

        

        }

    );


}



}

module.exports =  { priceIsEqual, runCronJobs }
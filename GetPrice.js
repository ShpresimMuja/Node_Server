





const axios = require('axios');


















module.exports = GetPrice = async function getPrice ( name )
{


    const config = {

        headers:{
    
          'X-CMC_PRO_API_KEY': '5ebc8979-1b50-4178-8ab1-e478feee7656',
          "Accept": "application/json",
    
    
        }
    
    
    
      };



let response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD", config);


let str = JSON.stringify(response.data);

let obj = JSON.parse(str);

let map = obj['data'];


for(let i = 0; i < map.length; i++)
{
    let object = map[i];

    if(map[i].name == name)
    {
        
        return JSON.stringify(object['quote']['USD']['price']);

    
    
    }

}



console.log('Hello World');

}

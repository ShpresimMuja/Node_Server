class Task{

    constructor(id, deviceID, taskType,FCM, taskInfo)
    {

        this.id = id;
        

        this.deviceID = deviceID;

        this.taskType = taskType;

        this.FCM= FCM;

        this.taskInfo = taskInfo;

        
    }



}

class CoinPriceCheckTask
{
    constructor(Coin, Price)
    {
        this.Coin = Coin;
        this.Price = Price;
    }

}

module.exports = {
    Task, CoinPriceCheckTask
}

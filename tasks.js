
const knex = require('./Database.js');
const Task =  require('./Task');




function createTask(task)
{
  



   // var t = new Task.Task();

   // t['id'] = task.id;
   // t['deviceID']= task.deviceID;
  //  t['taskType'] = task.taskType;
   // t['FCM'] = task.FCM;
  //  t['Coin'] = task.taskInfo.Coin;
  //  t['Price']= task.taskInfo.Price;
    

    return knex('tasks').insert(task);


}



function getAllTasks() {

    return knex.select('*').from('tasks');

}

function deleteTask(id){

    return knex('tasks').where({id: id}).del();


}
function getTaskById(id){

    return knex('tasks').where({id: id});



}

function updateTask(id, task){

    return knex('tasks').where({id: id}).update(task);


}

module.exports = {

    createTask, getAllTasks, deleteTask,updateTask, getTaskById
}




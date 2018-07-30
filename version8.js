//Practical JS Version 8 
//Our First Refactoring
//Refactoring is a process of restructuring existing computer code. It will work the same, but will make the code more readable and neeter 
//Change the HTML to:    <button onclick="handlers.displayTodos()">Display Todos</button>
   <button onclick="handlers.toggleAll()">Toggle All</button>
 
//Change the JS to 
var handlers = {
  displayTodos: function() {
   todoList.displayTodos();
 },
 toggleAll: function() {
   todoList.toggleAll();
 }
};

(Handlers are used to handle certain functions, this is shorter and more readable)

//It should have working controls for .addTodo

 <div>
    <button onclick="handlers.addTodo()">Add</button>
    <input id="addTodoTextInput" type="text">
  </div>


var handlers = {
  displayTodos: function() {
   todoList.displayTodos();
 },
 toggleAll: function() {
   todoList.toggleAll();
 },
 addTodo: function() {
   var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
   addTodoTextInput.value = '';
 }
};
//working controls for .changeTodo

 <div>
    <button onclick="handlers.changeTodo()">Change Todo</button>
    <input id="changeTodoPositionInput" type="number">
    <input id="changeTodoTextInput" type="text">
  </div>
  

 changeTodo: function() {
   var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
   var changeTodoTextInput = document.getElementById('changeTodoTextInput');
   todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
   changeTodoPositionInput = '';
   changeTodoTextInput = '';
   
 }
};


//working controls for .deleteTodo
 <div>
    <button onclick="handlers.deleteTodo()">Delete</button>
    <input id="deleteTodoPositionInput" type="number">
  </div>
  
 deleteTodo: function() {
   var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
   todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
   deleteTodoPositionInput.value = '';
 }

//working controls for .toggleCompleted 

<div>
    <button onclick="handlers.toggleCompleted()">Toggle Completed</button>
    <input id="toggleCompletedPositionInput" type="number">
  </div>
  
  
 toggleCompleted: function() {
   var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
   todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
   toggleCompletedPositionInput.value= '';
 },
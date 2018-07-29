//Practical Javascript Version 7 Watch and Code 


//the DOM 
//DOM: document object model- the browsers interpratation of the HTML code (for representing and interacting with objects)
//The DOM has a tree structure (parent and child elements)

//There should be a "display todos" button and a "toggle alll" button in the app 
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body>
    <h1>Todo List</h1>
   
   
   <button>Display Todos</button>
   <button>Toggle All</button>
  </body>

</html>

//Clicking "display todos" should run todoList.displayTodos. 
//type "document" in the console to access the DOM

//1. We want to get access to the display todos button. 

var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});



//Clicking "Toggle All" should run todoList.toggleAll
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});


script.js:5 Your todo list is empty!
todoList.addTodo("First Item");
script.js:7 My Todos:
script.js:12 ( ) First Item
undefined
todoList.addTodo("Second Item");
script.js:7 My Todos:
script.js:12 ( ) First Item
script.js:12 ( ) Second Item
undefined
script.js:7 My Todos:
script.js:12 ( ) First Item
script.js:12 ( ) Second Item
script.js:7 My Todos:
script.js:10 (x) First Item
script.js:10 (x) Second Item
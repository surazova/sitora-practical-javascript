// Version 3 Practical Javascript 

var todos = ['item 1', 'item 2', 'item 3']
//It should have a function to display todos
function displayTodos() {
    console.log('My todos:', todos);
}

//It should have a function to add todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

//It should have a function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

//It should have a function to delete todos 
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}


// observations 
// if you're inside of a function, you can look out an see data, but the opposite isn't true. If you're outside, you cant look in. 
var myName = 'sitora';
undefined
var myName = 'sitora';

function sayName() {
console.log(myName);
}

sayName(); //'sitora'

VM1070:4 sitora
undefined

var myName = 'sitora';

function sayName() {
var secret = 'watchandconde';
console.log(myName);
}

sayName(); //'sitora'
console.log(secret);

VM1080:5 sitora
VM1080:9 Uncaught ReferenceError: secret is not defined
    at <anonymous>:9:13



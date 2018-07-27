//Practical JacvaScript Version 5
//The for loop

for (var i = 0; i < 3; i++) {
    console.log("hey");
}

//Looping over arrays 
var testArray = ['item 1', 'item 2', 'item 3'];
undefined
testArray[0]
"item 1"
testArray[1]
"item 2"

for (var i = 0; i < 3; i++) {
	console.log(testArray[i]);
}
//It's better to write .length instead of a number, or else an extra item, if you had one, won't be printed 
for (var i = 0; i < testArray.length; i++) {
	console.log(testArray[i]);
}
VM809:3 item 1
VM809:3 item 2
VM809:3 item 3

//.displayTodos should show .todoText 
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:');
    for (var i = 0; i < this.todos.length; i++) {
    console.log(this.todos[i].todoText);
      
    }
  },
  addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      completed: false
      });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;   
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed; 
    this.displayTodos();
  }
};


//.displayTodos should tell you if .todos is empty 

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
      }
    }
  },
  addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      completed: false
      });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;   
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed; 
    this.displayTodos();
  }
};


todoList.displayTodos();
Your todo list is empty!

todoList.addTodo('an item');
My Todos:
an item

todoList.deleteTodo(0);
Your todo list is empty!

//.displayTodos should show .completed 

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true){
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      completed: false
      });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;   
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed; 
    this.displayTodos();
  }
};


todoList.addTodo('second');
script.js:7 My Todos:
script.js:12 ( ) second
undefined
todoList.addTodo('first');
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
undefined
todoList.toggleCompleted(0);
script.js:7 My Todos:
script.js:10 (x) second
script.js:12 ( ) first
undefined
todoList.toggleCompleted(0);
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
undefined
todoList.toggleCompleted(1);
script.js:7 My Todos:
script.js:12 ( ) second
script.js:10 (x) first
undefined
todoList.toggleCompleted(1);
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
undefined
todoList.addTodo('third');
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
script.js:12 ( ) third
undefined
todoList.addTodo('fourth');
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
script.js:12 ( ) third
script.js:12 ( ) fourth
undefined
todoList.addTodo('fifth');
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
script.js:12 ( ) third
script.js:12 ( ) fourth
script.js:12 ( ) fifth
undefined
todoList.addTodo('sixth');
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
script.js:12 ( ) third
script.js:12 ( ) fourth
script.js:12 ( ) fifth
script.js:12 ( ) sixth
undefined
todoList.toggleCompleted(3);
script.js:7 My Todos:
script.js:12 ( ) second
script.js:12 ( ) first
script.js:12 ( ) third
script.js:10 (x) fourth
script.js:12 ( ) fifth
script.js:12 ( ) sixth
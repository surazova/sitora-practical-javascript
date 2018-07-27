//Version 6 Practical JS
//.toggleAll: If everything is true, make everything false 

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
  },
  toggleAll: function() {
    var totalTodos = this.todos.length; 
    var completedTodos = 0;
    
    //Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //Case 1: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    this.displayTodos();
  }
};

todoList.addTodo('first');
script.js:7 My Todos:
script.js:12 ( ) first
undefined
todoList.addTodo('second');
script.js:7 My Todos:
script.js:12 ( ) first
script.js:12 ( ) second
undefined
todoList.toggleCompleted(0);
script.js:7 My Todos:
script.js:10 (x) first
script.js:12 ( ) second
undefined
todoList.toggleCompleted(1);
script.js:7 My Todos:
script.js:10 (x) first
script.js:10 (x) second
undefined
todoList.toggleAll();
script.js:7 My Todos:
script.js:12 ( ) first
script.js:12 ( ) second

//.toggleAll: Otherwise, make everything true 
//Otherwise = else statement

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
  },
  toggleAll: function() {
    var totalTodos = this.todos.length; 
    var completedTodos = 0;
    
    //Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //Case 1: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      } 
      //Case 2: Otherwise, make everything true;
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    
    this.displayTodos();
  }
};


todoList.displayTodos();
script.js:5 Your todo list is empty!
undefined
todoList.addTodo('first');
script.js:7 My Todos:
script.js:12 ( ) first
undefined
todoList.addTodo('second');
script.js:7 My Todos:
script.js:12 ( ) first
script.js:12 ( ) second
undefined
todoList.addTodo('third');
script.js:7 My Todos:
script.js:12 ( ) first
script.js:12 ( ) second
script.js:12 ( ) third
undefined
todoList.toggleAll();
script.js:7 My Todos:
script.js:10 (x) first
script.js:10 (x) second
script.js:10 (x) third
undefined
todoList.toggleAll();
script.js:7 My Todos:
script.js:12 ( ) first
script.js:12 ( ) second
script.js:12 ( ) third
undefined
todoList.toggleCompleted(0);
script.js:7 My Todos:
script.js:10 (x) first
script.js:12 ( ) second
script.js:12 ( ) third
undefined
todoList.toggleAll();
script.js:7 My Todos:
script.js:10 (x) first
script.js:10 (x) second
script.js:10 (x) third
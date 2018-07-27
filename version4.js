//Version 4-Booleans
//todoList.addTodo should add objects 
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      completed: false
      });
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};


todoList.addTodo('this is an object');


//todoList.changeTodo should change the todoText property 
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
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
  }
};


todoList.addTodo('first try');
todoList.changeTodo('second try');

//todoList.toogleCompleted should flip the completed property 
!true
false
!false
true
var sitoraBoolean = false;
undefined
!sitoraBoolean
true
sitoraBoolean = !sitoraBoolean;
true
(!=the bang operator)

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
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

todoList.addTodo('boolean testing');
false

todoList.toggleCompleted(0);
true


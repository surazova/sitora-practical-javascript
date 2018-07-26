// Version 3: All About Objects 
//What is an object? 
//Each line is called a property, they are separated by commas 
//Properties have a colon and value, in quotes 
//To use the object, you can assign it to a variable 
//All the different values belong to the computer. You can bring them up by calling their property 

var myComputer = {
	operatingSystem: 'mac',
	screenSize: '15 inches', 
	purchaseYear: 2011,
}; 
undefined
myComputer
{operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2011}
myComputer.operatingSystem
"mac"
myComputer.screenSize
"15 inches"
myComputer.purchaseYear
2011

//Objects and Functions 
//this: the entire object 
//Method: an object that is equal to a function 

var sitora = {
	name: 'sitora',
	sayName: function() {
	console.log(this);
    }
}
undefined
sitora.sayName();
VM1165:4 {name: "sitora", sayName: ƒ}name: "sitora"sayName: ƒ ()__proto__: Object
undefined
var sitora = {
	name: 'sitora',
	sayName: function() {
	console.log(this.Name);
    }
}
undefined
sitora.sayName;
ƒ () {
	console.log(this.Name);
    }
var sitora = {
	name: 'sitora',
	sayName: function() {
	console.log(this.name);
    }
}
undefined
sitora.sayName;
ƒ () {
	console.log(this.name);
    }

//Version 3: We want to put everything on an object, which become methods
// Add a todos array on an object 

var todoList = {
  todos: ['item 1', 'item 2', 'item 3']
};


//It should have a way to display todos 

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  }
};


//It should have an addTodo method 

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
};

//It should have a changeTodo method 

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  }
};

...Used todoList.changeTodo(0, 'first');

//It should have a delete Todo method 

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
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

...Used todoList.deleteTodo(1);






//Practical JS Version 9
//There should be an li element for every todo
var todoLi = document.createElement('li');
undefined
todoLi
<li>​</li>​
var todosUl = document.querySelector('ul');
undefined
todosUl
<ul>​
    
  ​</ul>​
todosUl.appendChild(todoLi);
<li>​</li>​

var view = {
  displayTodos: function() {
              var todosUl = document.querySelector('ul');
  todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li');
        todosUl.appendChild(todoLi);
  
    }
  }
};


//Each il element should contain .todoText 
var view = {
  displayTodos: function() {
              var todosUl = document.querySelector('ul');
  todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li');
        todoLi.textContent = todoList.todos[i].todoText;
        todosUl.appendChild(todoLi);
    }
  }
};

(then use: view.displayTodos();)
//by using todoLi.textContent = todoList.todos[i].todoText; you can view the todo that you added righ to the page 

//Each li element should show .completed 

var view = {
  displayTodos: function() {
              var todosUl = document.querySelector('ul');
  todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li');
        var todo = todoList.todos[i];
        var todoTextWithCompletion = '';
  
  if (todo.Completed === true) {
     todoTextWithCompletion = '(x)' + todo.todoText;
  } else {
     todoTextWithCompletion = '( )' + todo.todoText;

  }
  
  todoLi.textContent = todoTextWithCompletion; 
  todosUl.appendChild(todoLi);
    }
  }
};


//used view.displayTodos(); it should show () or (x) depending on what you click. 



//debugger shortcut
runWithDebugger(ourFunction);

//debugger; 
//ourFunction(); 

//replaces: debugger; 
//logTenNumbers();

function runWithDebugger(ourFunction) {
  debugger;
  ourFunction();
}

function runWithDebugger(ourFunction) {
  debugger;
  ourFunction();
}
undefined
runWithDebugger(function logTenNumbers() {
    for (var i = 0; i < 10; i++) {
        consol.log(i);
    }
});

//Making a simple timer 
setTimeout(function() {
	console.log('Wake up Sitora!');
}, 5000)


//forEach 
var students = ['jonathan', 'jenny', 'elliot'];
undefined
function logName(name) {
	console.log(name);
}
undefined
logName(students[0])
VM284:2 jonathan
undefined
logName(students[1])
VM284:2 jenny
undefined
logName(students[2])
VM284:2 elliot
undefined
for (var i = 0; i < student.length; i++) {
	logName(students[i]);	
}
VM303:1 Uncaught ReferenceError: student is not defined
    at eval (eval at runWithDebugger (newtab?ie=UTF-8:2), <anonymous>:1:21)
    at runWithDebugger (<anonymous>:2:3)
    at <anonymous>:1:1
(anonymous) @ VM303:1
runWithDebugger @ VM206:2
(anonymous) @ VM228:1
for (var i = 0; i < students.length; i++) {
	logName(students[i]);	
}
VM284:2 jonathan
VM284:2 jenny
VM284:2 elliot
undefined
students.forEach(logName)
VM284:2 jonathan
VM284:2 jenny
VM284:2 elliot
undefined
students.forEach(function logName(name) {
console.log(name);
})
VM316:2 jonathan
VM316:2 jenny
VM316:2 elliot
students.forEach(function (name) {
console.log(name);
})
VM320:2 jonathan
VM320:2 jenny
VM320:2 elliot

//For each is enhancing the item, so you don't have to write in for loops constantly. 
function forEach(myArray, myFunction) {
	for (var i = 0; i < myArray.length; i++) {
myFunction(myArray[i]);
}
}
undefined
forEach(students, function(student) {
	console.log(student);
})
VM329:2 jonathan
VM329:2 jenny
VM329:2 elliot
undefined
forEach(students, logName)
VM284:2 jonathan
VM284:2 jenny
VM284:2 elliot
undefined

//addEventListener 
var tutorialsElement = $0;
tutorialsElement.addEventListener('click', function() {
  console.log(event);
  console.log('The tutorials element was clicked!');
});

//buzzwords: Higher order functions and callback functions 
Higher order functions: 
  Functions that accept other functions 
  Enhance the behavior of other functions 
  
Callback functions:
  The functions that are passed into higher order functions 
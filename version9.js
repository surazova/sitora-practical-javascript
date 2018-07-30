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

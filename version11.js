//Practical JS Version 11 

//todoList.toggleAll should use forEach 
    // Get number of completed todos.
    this.todos.forEach(function(todo) {
    if (todo.completed === true) {
      completedTodos++;
      }
    });
    
//     // Case 1: If everything’s true, make everything false.
//     if (completedTodos === totalTodos) {
//       this.todos.forEach(function(todo) {
//         todo.completed = false; 
//       });
      
//     // Case 2: Otherwise, make everything true.
//     } else {
//       this.todos.forEach(function(todo) {
//         todo.completed = true;
//       });
//     }
    
    this.todos.forEach(function(todo) {
    //case 1: if everything is true, make everyithng false 
      if (completedTodos === totalTodos) {
        todo.completed = false; 
        //case 2 :  otherwise make everything true 
      } else {
        todo.completed = true; 
      }
    });
  }
};

//view.displayTodos should use forEach 
//this: refers to the view object

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
  
    //forEach(callback, this) 
    
    todoList.todos.forEach(function(todo, position) {
          var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi); 
    }, this);
  },
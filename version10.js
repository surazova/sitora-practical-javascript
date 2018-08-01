//Practical JS Version 10 
//The 'return' statement 
function multiplyTwoNumbers(a, b) {
	var result = a * b;
}

var theProductOf20And10 = multiplyTwoNumbers(2, 10);
undefined
function multiplyTwoNumbers(a, b) {
	var result = a * b;
	return result;
}

var theProductOf20And10 = multiplyTwoNumbers(2, 10);
undefined
theProductOf20And10
20

//There should be a way to create the delete buttons 
 },
  createDeleteButton: function() {
   var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
   return deleteButton;
  }
};

//console for this: 
    view.createDeleteButton()
<button class=​"deleteButton">​Delete​</button>​
var sitoraElement = view.createDeleteButton();
undefined
sitoraElement
<button class=​"deleteButton">​Delete​</button>​

//There should be a delete button for each todo 

//Added the code in the middle: 
      
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
      
//Each li should have an id that has the todo position 
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
      
//Delete buttons should have access to the todo id 


var todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function(event) {
  console.log(event.target.parentNode.id);
});



//Clicking delete should update todoList.todos and the DOM

    //changed the delete todo 
      deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  
//parseInt turns a string into a number 
  setUpEventListeners: function() {
      var todosUl = document.querySelector('ul');

      todosUl.addEventListener('click', function(event) {
        // get the element that was clicked on. 
      var elementClicked = event.target;

      //check if element clicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();

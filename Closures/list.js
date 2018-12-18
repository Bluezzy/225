function makeList() {
  var list = [];
  return function(todo) {
    if (!todo) {
      if (list.length === 0) {
        console.log('the list is empty');
      } else {
        list.forEach(function(anyTodo) {
          console.log(anyTodo);
        });
      }

    } else {
      if (todoAlreadyExists(list, todo)) {
        var todoIndex = list.indexOf(todo);
        list.splice(todoIndex, 1);
        console.log(todo + ' removed!')
      } else {
        list.push(todo);
        console.log(todo + ' added!');
      }
    }
  };
}

function todoAlreadyExists(list, todo) {
  return list.some(function(anyTodo) {
    return anyTodo === todo;
  });
}

var list = makeList();
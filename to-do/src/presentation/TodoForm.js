import React from 'react';

const TodoForm = ({ addTodo }) => {
  // Input tracker
  let input;

  return (
    <div>
      <input onKeyUp={handleKeyEnter} ref={node => {
        input = node;
      }}/>
    </div>
  );

  function handleKeyEnter(event){
    if (event.keyCode === 13) {
      addTodo(input.value);
      input.value = '';
    }
  }

};
export default TodoForm;
// Mengambil form element
const formElement = document.querySelector('.form-todo');

// Menambahkan form event listener
formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  // Mengambil input element di html
  const inputElement = document.querySelector('.input-todo');

  // Mengambil wrapper todo element sebagai entry point todo item
  const wrapperTodoElement = document.querySelector('.wrapper-todo');

  // Membuat todo item di js
  // const todoItem = `<li class="todo-item">${inputElement.value}</li>`;
  const todoItem = document.createElement('li');
  todoItem.innerHTML = inputElement.value;

  // Menambahkan todo item ke dalam wrapper todo
  // wrapperTodoElement.innerHTML = todoItem;
  wrapperTodoElement.append(todoItem);

  // Menghapus input value setelah submit
  inputElement.value = '';
});

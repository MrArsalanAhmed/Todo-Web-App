const input = document.querySelector('.todo');
const ol = document.querySelector('ol');

let todo = [];
function addTodo(e){
    e.preventDefault();
    ol.innerHTML = '';
    switch (input.value) {
        case '':
            alert('Please enter a task before adding.');
            break;

        default:
            todo.push(input.value);
            console.log(todo);
            for(let i = 0; i < todo.length; i++){
            ol.innerHTML += `<li> ${todo[i]}  
            <button onclick='deleteTodo(${i})'>Delete</button>
            <button onclick='editTodo(${i})'>Edit</button>
            </li>`;        
        }
    }
    
    input.value = '';

}

function deleteTodo(index){
    ol.innerHTML = '';
    todo.splice(index , 1);
    for(let i = 0; i < todo.length; i++){
        ol.innerHTML += `<li> ${todo[i]}  
        <button onclick='deleteTodo(${i})'>Delete</button>
        <button onclick='editTodo(${i})'>Edit</button>
        </li>`;
        
    }
}

function editTodo(index){
    console.log(index);
    ol.innerHTML = '';
    let userValue = prompt('Enter edited Value');
    todo.splice(index , i);
    for(let i = 0; i < todo.length; i++){
        ol.innerHTML += `<li> ${todo[i]} </li> 
        <button onclick='deleteTodo(${i})'>Delete</button>
        <button onclick='editTodo(${i})'>Edit</button>`;
        
    }
}

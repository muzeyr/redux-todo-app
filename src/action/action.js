export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

let todoId = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: todoId++,
        text
    }

}
export function deleteTodo(id) {
    return {
        type: DEL_TODO,
        id: todoId++,
        id
    }

}

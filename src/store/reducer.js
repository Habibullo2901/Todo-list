const initialState = {
    todos: []
}

export const reducer = (state = initialState, action) => {
    if(action.type === "SEND_TODO"){
        return {
            todos: [action.todo, ...state.todos]
        }
    }
}
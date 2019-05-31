//  {}
//  =
//  []

import {observable, action, computed} from 'mobx'

class TodoStore {
    @observable todos = [];

    @action addTodo = (todo) => {
        this.todos.push(todo);
    }
    //TODO: currently glitches when 2 todos with same name
    @action finishTodo = (sentTodo) => {
        this.todos.splice(this.todos.findIndex(todo => todo.value == sentTodo.value))
    }
    @computed get todoCount () {
        return this.todos.length
    }
}

const store = new TodoStore();
export default store;
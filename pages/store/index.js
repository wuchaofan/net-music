import { observable, computed } from "mobx";

class Todo {
  id = Math.random();
  @observable title = ""
  @observable finished = false
  @observable todos = []
  // @computed get unfinishedTodoCount() {
  //   return this.todos.filter(todo => !todo.finished).length;
  // }
}


export default new Todo()
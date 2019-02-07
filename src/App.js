class App {
  show() {
    const allTodo = this.todoRepository.findAll();
    allTodo.forEach(todo => {
      console.log('-----------------------');
      console.log(this.formatTitle(todo));
      console.log(todo.getUrl());
    });
  }

  formatTitle() {}
}

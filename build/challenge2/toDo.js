var itemStatus;
(function (itemStatus) {
    itemStatus["Done"] = "done";
    itemStatus["InProgress"] = "in-progress";
    itemStatus["Todo"] = "todo";
})(itemStatus || (itemStatus = {}));
const todoItems = [
    { id: 1, title: "Learn HTML", status: itemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: itemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: itemStatus.Todo }
];
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo.title,
        status: todo.status
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1;
}
const newTodo = addTodoItem({
    title: "Buy PS5",
    status: itemStatus.Todo
});
console.log(JSON.stringify(newTodo));

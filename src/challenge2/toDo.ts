enum itemStatus {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo"
}

const todoItems : todoItem[] = [
    { id: 1, title: "Learn HTML", status: itemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: itemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: itemStatus.Todo }
]

interface todoItem {
    id?: number
    title: string
    status: itemStatus
    completedOn?: Date
}

function addTodoItem(todo: todoItem) : todoItem {
    const id = getNextId(todoItems)

    const newTodo : todoItem = {
        id,
        title: todo.title,
        status: todo.status
    }

    todoItems.push(newTodo)

    return newTodo

}

function getNextId<T extends todoItem>(items : T[]) : number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem({
    title: "Buy PS5",
    status: itemStatus.Todo
})

console.log(JSON.stringify(newTodo))
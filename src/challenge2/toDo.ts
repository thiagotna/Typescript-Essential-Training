enum itemStatus {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo"
}

const todoItems : TodoItem[] = [
    { id: 1, title: "Learn HTML", status: itemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: itemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: itemStatus.Todo }
]

interface TodoItem {
    id: number
    title: string
    status: itemStatus
    completedOn?: Date
}

function addTodoItem(todo: string) : TodoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: itemStatus.Todo
    }

    todoItems.push(newTodo)

    return newTodo

}

function getNextId<T extends {id: number}>(items : T[]) : number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy PS5.")

console.log(JSON.stringify(newTodo))
// The data model for a todo is as follows
/*
{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2024-08-30"
};
*/

let todosArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    if (!task || typeof completed !== "boolean" || !dueDate) {
        return false;
    }

    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;
}

function getAll() {
    return todosArray;
}

function findById(id) {
    const numericId = Number(id);
    const toDo = todosArray.find(item => item.id === numericId);
    return toDo || false;
}

function updateOneById(id, updatedData) {
    const item = findById(id);
    if (item) {
        if (updatedData.task) item.task = updatedData.task;
        if (updatedData.completed) item.completed = updatedData.completed;
        if (updatedData.dueDate) item.dueDate = updatedData.dueDate;
        return item;
    }
    return false;
}

function deleteOneById(id) {
    const numericId = Number(id);
    const car = findById(id);
    if (car) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(item => item.id !== numericId);
        return todosArray.length < initialLength;
    }
    return false;    
}

if (require.main === module) {
    let result = addOne("Do dishes", false, "2024-11-04");
    console.log(result);

    result = addOne("Take out the trash", true, "2024-11-03");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { completed: true}));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findByID called after item deleted:", findById(1));
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;
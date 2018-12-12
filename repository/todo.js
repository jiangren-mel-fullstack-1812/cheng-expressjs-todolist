
var todoRepository = {
    todoList: [],
    incrementId: 0,
    create: function(name) {
        var newRecord = {id: this.incrementId++, name: name, done: false};
        this.todoList.push(newRecord);
        return newRecord;
    },
    getByName: function(name) {
        return this.todoList.filter(function(value) {
            console.log(this.todoList);
            return name === value.name; 
        });
    },
    getById: function(id) {
        return this.todoList.filter(function(value) {
            return id == value.id;
        })[0];
    },
    getAll: function() {
        return this.todoList;
    },
    patch: function(id, body) {
        var aTodo = this.todoList.find((value) => {
            return id == value.id;
        });
        if (aTodo) {
            Object.assign(aTodo, body);
        }
        return aTodo;
    },
    delete: function(id) {
        var foundTodoIndex = this.todoList.findIndex(function(value) {
            return id == value.id;
        })
        console.log(`about to delete the element with index ` + foundTodoIndex);
        return this.todoList.splice(foundTodoIndex, 1);
    }
}

module.exports = todoRepository;
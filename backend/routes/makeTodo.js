import express from 'express'
import { createATodo, deleteTodo, getAllTodos, getTodo, updateTodo } from '../controllers/makeTodo.js'
import { createAImportantTodo, deleteImportantTodo, getAllImportantTodos, getImportantTodo, updateImportantTodo } from '../controllers/ImportantTodos.js'
import { createATaskTodo, deleteTaskTodo, getAllTaskTodos, getTaskTodo, updateTaskTodo } from '../controllers/TasksTodos.js'
import { createAPlannedTodo, deletePlannedTodo, getAllPlannedTodos, getPlannedTodo, updatePlannedTodo } from '../controllers/PlannedTodos.js'

const todorouter = express.Router()

// Home
todorouter.post("/make-A-Todo" , createATodo)
todorouter.put("/update-A-Todo/:id" , updateTodo )
todorouter.get("/get-A-Todo/:id" , getTodo )
todorouter.get("/get-All-Todos" , getAllTodos )
todorouter.delete("/delete-Todo/:id" , deleteTodo )

// important

todorouter.post("/make-An-Important-Todo" ,createAImportantTodo )
todorouter.put("/update-An-Important-Todo/:id" ,updateImportantTodo  )
todorouter.get("/get-An-Important-Todo/:id" , getImportantTodo  )
todorouter.get("/get-All-Important-Todos" ,getAllImportantTodos  )
todorouter.delete("/delete-ImortantTodo/:id" , deleteImportantTodo )

// tasks

todorouter.post("/make-A-Task-Todo" , createATaskTodo)
todorouter.put("/update-A-Task-Todo/:id" , updateTaskTodo)
todorouter.get("/get-A-Task-Todo/:id" , getTaskTodo)
todorouter.get("/get-All-Tasks-Todos" , getAllTaskTodos)
todorouter.delete("/delete-Task-Todo/:id" , deleteTaskTodo)

// planned
todorouter.post("/make-A-Planned-Todo" , createAPlannedTodo)
todorouter.put("/update-A-Planned-Todo/:id" , updatePlannedTodo)
todorouter.get("/get-A-Planned-Todo/:id" , getPlannedTodo)
todorouter.get("/get-All-Planned-Todos" , getAllPlannedTodos)
todorouter.delete("/delete-Planned-Todo/:id" , deletePlannedTodo)


export default todorouter
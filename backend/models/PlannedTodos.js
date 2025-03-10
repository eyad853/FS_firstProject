import mongoose from "mongoose";  

const TodoSchema = new mongoose.Schema({
  todoValue: {  
    type: String,  
    required: true
  },
  date:{
    type: String,
  },
  reminder:{
    type: String
  },
  repeat:{
    type:String,
  },
  completed:{
    type:Boolean,
    default:false
  }

} , {timestamps:true});

const PlannedTodoModel = mongoose.model("PlannedTodo" , TodoSchema)

export default PlannedTodoModel
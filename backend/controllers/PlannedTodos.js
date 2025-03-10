import PlannedTodoModel from "../models/PlannedTodos.js";

export const createAPlannedTodo = async (req , res)=>{
    const {todoValue , date , reminder , repeat , completed} = req.body;

    if(!todoValue){
        return res.status(400).json({
            error:true,
            message:"there's no value to make a todo"
        })
    }

    try{
        const newTodo =  new PlannedTodoModel({
            todoValue,
            date,
            reminder,
            repeat,
            completed
        })
    
    await newTodo.save()
    
    return res.status(200).json({
        error:false,
        message:"todo has been created",
    })

    }catch(error){
        return res.status(500).json({
            error:true,
            message:error.message
        })
    }


}

export const updatePlannedTodo = async (req , res )=>{
    const {id}=req.params
    const {todoValue , date , reminder , repeat , completed} = req.body;

        if(!id){
            return res.status(400).json({
                error:true,
                message:"there's no id to update a todo"
            })
        }
        

        try{

            const updateFields = {
                todoValue,
                date,
                reminder,
                repeat,
                completed,
              };

            

            const updatedTodo = await PlannedTodoModel.findByIdAndUpdate(id ,
            updateFields,
            {new:true ,runValidators:true })

            if (!updatedTodo) {
                return res.status(404).json({
                    error: true,
                    message: "Todo not found",
                });
            }
    
            return res.status(200).json({
                error: false,
                message: "Todo has been updated",
                data: updatedTodo,
            });

        }catch(error){
            return res.status(500).json({
                error:true,
                message:error.message
            })  
        }
}

export const getPlannedTodo = async (req , res)=>{
    const {id} = req.params

    if(!id){
        return res.status(400).json({
            error:true,
            message:"there's no id to update a todo"
        })
    }

try{
    const getTodo = await PlannedTodoModel.findById({_id:id})

    if (!getTodo) {
        return res.status(404).json({
            error: true,
            message: "Todo not found",
        });
    }

    return res.status(200).json({
        error: false,
        message: "Todo has been fetched",
        data: getTodo,
    });
}catch(error){
    return res.status(500).json({
        error:true,
        message:error.message
    })  
}
}

export const getAllPlannedTodos = async(req , res)=>{
    try{
        const getAllTodos = await PlannedTodoModel.find()

        if (!getAllTodos) {
            return res.status(404).json({
                error: true,
                message: "Todo not found",
            });
        }
    
        return res.status(200).json({
            error: false,
            message: "Todo has been updated",
            data: getAllTodos,
        });

    }catch(error){
        return res.status(500).json({
            error:true,
            message:error.message
        })
    }
}

export const deletePlannedTodo = async (req , res)=>{
    const {id} = req.params

    try{
        await PlannedTodoModel.findByIdAndDelete({_id:id})
    }catch(error){
        return res.status(500).json({
            error:true,
            message:error.message
        })
    }
}
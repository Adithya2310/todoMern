import todo from "../model/todoModel.js"

const addTodo=async (req,res)=>{
        try{
            const todoItem=new todo({
                data: req.body.data,
                createdAt: Date.now()
            });
            await todoItem.save();
            return res.status(200).json(todoItem);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

const getTodo=async (req,res)=>{
    try{
        const todoList=await todo.find({}).sort({createdAt:-1});
        return res.status(200).json(todoList);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

const toggleTodo=async(req,res)=>{
    try{
        const todoList=await todo.findById(req.params.id);
        todoList.done=!todoList.done;
        await todoList.save();
        return res.status(200).json(todoList);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

const updateTodo=async(req,res)=>{
    try{
        await todo.findByIdAndUpdate(req.params.id,{
            data: req.body.data,
        });
        const updatedTodo=await todo.findById(req.params.id);
        return res.status(200).json(updatedTodo);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteTodo=async (req,res)=>{
    try{
        const deletedTodo=await todo.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletedTodo);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

export {addTodo,getTodo,toggleTodo,updateTodo,deleteTodo};
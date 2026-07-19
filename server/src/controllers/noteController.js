import Note from '../models/noteModel.js';

export const createTask = async(req,res)=>{
    try{
        const {title,description} =  req.body;

        const note = await Note.create( { title,description});
        res.status(201).json({message:"Created Successfully", data: note});

    }catch(error){
        res.status(500).json({success : false, message: error.message });
    }
};

export const getTask = async(req,res)=>{
    try {
       
        const notes = await Note.find();
        res.status(200).json({message : "Get Successfully", data : notes});

    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }
};

export const deleteTask = async(req,res)=>{
    try {
        
        const {id } = req.params;

        const deleted = await Note.findByIdAndDelete(id);
        res.status(200).json({message : "Deleted Successfully" , data: deleted});
        
    } catch (error) {
        res.status(500).json({success : false , message:error.message});
    }
};

export const updateTask = async(req,res)=>{
    try {
        
        const {id} = req.params;

        const update = await Note.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({message : "Updated Successfully", data:update});
        
    } catch (error) {
        res.status(500).json({success:false, message : error.message});
    }
};



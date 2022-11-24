const {UsersServices} = require('../services');

const getUserById = async(req, res, next)=>{
 try{
        const {id} = req.params;
        const result = await UsersServices.getById(id);
        if(result){
            res.json(result);
        }
        else{
            next({
                status:400,
                errorContent: "",
                message: 'User not find'   
               });
        }
                    
 } catch(error){
    next({
     status:400,
     errorContent: error,
     message: 'User not find'   
    });
 }
};


const createUser = async (req, res, next)=>{
    try{
        const newUser = req.body;
        const result = await UsersServices.create(newUser);
        res.status(201).json(result);
    }catch(error){
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        });
    }
};

const updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const dataUpdate = req.body;
      const result = await UsersServices.update(dataUpdate, id);
      res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        });
    }
  };

 const getUserCourses = async(req, res, next)=>{
    try{
           const {id} = req.params;
           const result = await UsersServices.getCourses(id);
           if(result){
               res.json(result);
           }
           else{
               next({
                   status:400,
                   errorContent: "",
                   message: 'User not find'   
                  });
           }
                       
    } catch(error){
       next({
        status:400,
        errorContent: error,
        message: 'User not find'   
       });
    }
   };


module.exports = {
    getUserById,
    createUser,
    updateUser,
    getUserCourses
}
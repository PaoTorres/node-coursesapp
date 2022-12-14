const { CategoriesServices} = require("../services");

const createCategory = async(req, res, next) => {
    try {
        
        const name = req.body;
        const result = await CategoriesServices.create(name);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: "You do not meet all the required fields.",
          });
    }
};


const deleteCategory = async(req, res, next) => {
    try {
        
        const {id} = req.params;
        const result = await CategoriesServices.delete(id);
        if(result){  
            res.status(200).json({message: `Category ${id} deleted.`});
        }
        else {
            next({
                status: 418,
                errorContent: error,
                message: `id ${id} not found`,
            });
        }
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: `Category not found`,
          });
    }
};

module.exports = {
    createCategory, 
    deleteCategory,
};
const { CategoriesServices} = require("../services");

const createCategories = async(req, res, next) => {
    try {
        const {name} = req.body;
        const result = await CategoriesServices.create(name);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: "You do not meet all the required fields",
          });
    }
};

module.exports = {
    createCategories, 
};
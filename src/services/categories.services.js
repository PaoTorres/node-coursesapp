const { Categories } = require("../models");

class CategoriesServices{

    static async create(category) {
        try {
            const result = await Categories.create(category);
            return result;
        } catch (error) {
            throw error;
        }
    }


    static async delete(id)
    {
       try{
             const result =  await Categories.destroy({
                    where: { id }
             });
             return result;

       }catch(error)
       {
         throw error;
       }
    }

}




module.exports = CategoriesServices;
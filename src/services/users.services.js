const { Users, UsersCourses, Courses } = require('../models');

class UsersServices {

    static async getById(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["id", "firstname", "lastname", "email"]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    
    static async getCourses(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["id", "firstname", "lastname", "email"],
                include: {
                    model: UsersCourses,
                    as: "registers",
                    attributes: ["course_id"],
                    include: {
                        model: Courses,
                        as: "inscriptions",
                        attributes: ["title"],
                    }
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }


      static async addCourse(id, idCourse) {
        try {
            const newRegister = {userId: id, courseId: idcourse};
            const result = await UsersCourses.create(newRegister);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(newUser) {
        try {
          const result = await Users.create(newUser);
          return result;
        } catch (error) {
          throw error;
        }
    };


    static async update(data, id) {
        try {
            const result = await Users.update({ firstname: data.firstname, lastname: data.lastname, password: data.password }, {
                where: { id },
                attributes: ["id", "firstname", "lastname", "email", "updateAt"],
                individualHooks: true,
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    /*// Change everyone without a last name to "Doe"
            await User.update({ lastName: "Doe" }, {
            where: {
            lastName: null
            }
});
*/
    /*
        static async getUserJoinAddress(id) {
            try {
                const result = await Users.findOne({
                    where: { id },
                    attributes: ['id', 'username'],
                    include: {
                        model: Adress,
                        as: "home",		
                    attributes: {
                            exlude: ["id", "user_id", "userId"], //Excluir.
    
                        }
    
                    }
                });
            } catch (error) {
                throw error;
            }
        }//del metodo
    */

    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = UsersServices;
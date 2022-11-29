const { VideosServices} = require("../services");

const createVideo = async(req, res, next) => {
    try {
        const newVideo = req.body;
        console.log(`Entró a controlador newVideo ${newVideo}`);
        const result = await VideosServices.create(newVideo);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: "You do not meet all the required fields.",
          });
    }
}


const deleteVideo = async(req, res, next) => {
    try {
        
        const {id} = req.params;
        const result = await VideosServices.delete(id);
        if(result){  
            res.status(200).json({message: `Video ${id} deleted.`});
        }
        else {
            next({
                status: 418,
                errorContent: error,
                message: `Video id ${id} not found.`,
            });
        }
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: `Video not found.`,
          });
    }
};

module.exports = {
    createVideo, 
    deleteVideo,
};
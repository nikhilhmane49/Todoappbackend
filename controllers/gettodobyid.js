
const todo = require("../models/todo");



exports.gettodobyid = async (req, res) => {
    try {
        const id = req.params.id;

        const todobyid = await todo.findById({ _id: id });

        if (!todo) {
            res.status(404).json({
                success: false,
                message: "for this id data not found ",
            });
        }

        res.status(200).json({
            success: true,
            data: todobyid,
            message: "data fetch successfully ",
        });
    }

    catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "data not found ",
        });
    }
}
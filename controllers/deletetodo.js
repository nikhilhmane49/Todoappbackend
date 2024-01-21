const todo = require("../models/todo");

exports.deletetodo = async (req, res) => {

    try {
        const { id } = req.params;

        await todo.findByIdAndDelete(id);


        res.status(200).json({
            success: true,

            message: "data delete successfully ",
        });
    }

    catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "data not deleted ",
        });
    }
}
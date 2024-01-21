const todo = require("../models/todo");


exports.updatetodo = async (req, res) => {
    try {

        const { id } = req.params;

        const { title, description } = req.body;

        const updatetodobyid = await todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updateat: Date.now(), }
        );

        res.status(200).json({
            success: true,
            data: updatetodobyid,
            message: "data update successfully ",
        });

    }
    catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "data not update ",
        });
    }
}
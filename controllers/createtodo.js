const todo = require("../models/todo");


exports.createtodo = async (req, res) => {
    try {

        const { title, description } = req.body;

        const responce = await todo.create({ title, description });

        res.status(200).json({
            success: true,
            data: responce,
            message: "data entry is successfully",
        });



    }
    catch {
        console.error("error");
        console.log(error.message);
        res.status(500).json({
            success: false,
            data: "error ",
            message: "data entry is successfully",
        })

    };
}
const todo = require("../models/todo");

exports.gettodo = async (req, res) => {
    try {

        const getdata = await todo.find({});

        res.status(200).json({
            success: true,
            data: getdata,
            message: "data entry is successfully",
        });

    }

    catch {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "db is having error",
        });

    }
}





import app from "../index";


    app:get("/", (req, res) => {
    res.json({status: "Running away"});
    })

    export default app;
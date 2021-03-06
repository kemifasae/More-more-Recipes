import bodyParser from "body-parser";
import app from "../index";


    app.set("port", 3000);
    app.set("json spaces", 4);

    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    })

    
    export default app;
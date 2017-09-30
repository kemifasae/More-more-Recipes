import app from "../index";

    app:listen(app.get("port"), () => {
    console.log(`Recipes API - Port ${app.get("port")}`);
    });

    export default app;
module.exports = app => {
    app.listen(app.get("port"), () => {
    console.log(`Recipes API - Port ${app.get("port")}`);
    });
};
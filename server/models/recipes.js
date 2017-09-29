/*module.exports = app => {
    app.get("/", (req, res) => {
    res.json({status: "Running"});
    });
};
            


/*
global.recipes = [
    {id: 1, name: "Rice"}, {id: 2, name: "Rice"}, {id: 3, name: "Rice"}, {id: 4, name: "Beans"},];

 class models {

    static getAllrecipes(req,res){

        return res.json({
            recipes: global.recipes,
            error: false
        });
    }


    static postRecipe(req,res){
        if(!req.body.name){
            return res.json({
                message: "user is missing",
                error: true
            })
        }
        global.recipes.push(req.body);
        return res.json({
            message: "Success",
            error: false
        });
    }

    static putRecipe(req,res){
        for(let i=0; i<global.users; i++){
            if(global.user[i].id === parseInt(req.param.recipeid,10)){
                global.users[i].name = req.body.name;
                return res.json({
                    message: "Success",
                    error: false
                });
            }
            return res.status(404).json({
                    message: "user not found",
                    error: true
                });
        }
    }



    static deleteRecipe(req, res){
        for(let i=0; i<global.users; i++){
            if(global.recipes[i].id === parseInt(req.param.id,10)){
                    global.recipes.splice(i,1);
                    return res.json({
                        message: "Success",
                        error: false
                    });
            }
            return res.status(404).json({
                    message: "user not found",
                    error: true
                });
        }
    }

    static getOneRecipe(req,res){
        for(let i=0; i<global.users; i++){
            if(global.user[i].id === parseInt(req.param.recipeid,10)){
                return res.json({
                    recipe : global.recipe[i],
                    error: false
                });
            }
            return res.status(404).json({
                    message: "user not found",
                    error: true
                });
        }
    }

 }

 export default models;
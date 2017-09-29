//import models from '../models/recipes'
//import express from "express";
//const route = express();


   
    global.recipes = [
        {id: 1, name: "Rice"}, {id: 2, name: "Rice"}, {id: 3, name: "Rice"}, {id: 4, name: "Beans"},];

        
    //const Recipes = app.models.recipes;

   

    app.route("/recipes")
        .get((req,res)=>{
            return res.json({
                recipes: global.recipes,
                error: false
            });
        })
        .post((req,res)=>{
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
        })
    

    app.route("/recipes/:id")
        .get((req,res)=>{
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
        })
        .put((req,res)=>{
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
        })
        .delete((req,res)=>{
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
        });
        
    app.route("/recipes/:id/reviews")
    .get((req,res)=>{
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
    })
    .put((req,res)=>{
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
    });
       
export default app;
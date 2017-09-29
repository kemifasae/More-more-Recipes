module.exports = app => {
    //const Recipes = app.models.users;

    app.route("/users/:id")
        .get((req, res)=>{ //gets a particular recipe
            Users.findById(req.params.id, {
                attributes: ["id", "name", "email"]
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });

    app.route("/users/:id/profile")
    
        .get((req, res)=>{ //gets all reviews for a particular recipe
            Recipes.findAll({},(recipes)=>{
                res.json({recipes: recipes});
            });  
        })
        .post((req, res)=>{ //post review for a recipe
            Users.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });  
    
};
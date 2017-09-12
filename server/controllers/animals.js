var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
	show: function(req,res){
		Animal.find({}, function(err,animals) {
	    	if(err) {
	    		console.log('something went wrong in Animal.find');
	        	console.log(err);
	    	} else {
	    		console.log("Got " + animals.length + " animals");
	    	}
	      res.render('index', {animals:animals} );
	    });
	},
	edit: function(req,res){
		console.log("edit " + req.params.id);
	    Animal.findOne({_id:req.params.id}, function(err,animal){
	        if(err) {
	            console.log('something went wrong in animals/edit at find');
	            console.log(err);
	        } else {
	            console.log("Got " + animal.name );
	        }
	        res.render("animalupdate", {animal:animal});
	    });  
	},
	destroy: function(req,res){
		console.log("destroy " + req.params.id);
	    Animal.remove({_id:req.params.id}, function(err,animal){
	        if(err) {
	            console.log('something went wrong in animals/destroy');
	            console.log(err);
	        } else {
	            console.log("removed an animal");
	        }
	        res.redirect("/");
	    });  
	},
	update: function(req,res){
		console.log("POST DATA", req.body);
	    Animal.findOne({_id:req.params.id}, function(err,animal){
	        if(err) {
	            console.log('something went wrong in animals/edit at find');
	            console.log(err);
	        } else {
	            console.log("Got " + animal.name );
	            animal.name = req.body.name;
	            animal.height = req.body.height;
	            animal.weight = req.body.weight;
	            animal.info = req.body.info;
	            animal.save(function(err){
	                if(err){
	                    console.log('error at save in update animal');
	                } else {
	                    console.log('update successful');
	                }
	            });
	        }
	        res.redirect("/");
	    }); 
	},
	create: function(req,res){
		console.log("POST DATA", req.body);
	    var animal = new Animal({name: req.body.name, height: req.body.height,
	        weight:req.body.weight, info:req.body.info});
	  
	    animal.save(function(err) {
		    // if there is an error console.log that something went wrong!
		    if(err) {
		      console.log('something went wrong in animal.save');
		      console.log(err);
		    } else { // else console.log that we did well and then redirect to the root route
		      console.log('successfully added an animal');
		      res.redirect('/');
		    }
		});
	}
}
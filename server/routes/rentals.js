const express = require('express');
const router = express.Router();

const Rental = require("../models/rental");

const userCtrl = require('../controllers/users');

router.get('/secret', userCtrl.authMiddleware,function(req,res){
    res.json({"secret":"Yes, this is the secret. Have fun!"});
});

router.get('',function(req,res){
    Rental.find({},(err,foundRentals)=>{
        res.json(foundRentals);
    });
});

router.get('/:id',(req,res)=>{
    const rentalId = req.params.id;
    Rental.findById(rentalId,(err,foundRental)=>{
        if(err){
            res.status(422).send({
                errors: [
                    {
                        title: 'Rental Error',
                        details: 'Could not find Rentals!'
                    }
                ]
            })
        }
        res.json(foundRental);
    });
});

module.exports = router;
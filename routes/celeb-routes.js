const express = require('express');
const router  = express.Router();
const Celeb  = require('../models/celeb');

router.get('/celebs', (req, res, next)=>{
    Celeb.find()
    .then((listOfCelebs)=>{
        res.json(listOfCelebs)

    })
    .catch((err)=>{
        next(err);
    })
})

router.post('/celebs', (req, res, next)=>{
    let name = req.body.name;
    let occupation = req.body.occupation;
    let catchPhrase = req.body.catchPhrase;

    Celeb.create({
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    })
    .then((response)=>{
        res.json({message: 'Successfully Created Celeb'});
    })
    .catch((err)=>{
        res.json(err);
    })
})

module.exports = router;
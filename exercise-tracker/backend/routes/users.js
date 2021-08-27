const router = require('express').Router();
let User = require('../models/user.model'); //mongoose model

//if '/' at the end and it is a get request 
router.route('/').get((req, res) => {
    //mongoose method, get a list of users from the server
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    //save the user to the database
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;
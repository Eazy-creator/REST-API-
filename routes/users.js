import express from 'express';

const router = express.Router()

const users = [
    {
        name: "mo",
        lastName: "yh",
        age: 78
    },
    {
        name: "why",
        lastname: "ee",
        age: 90

    }

]

router.get('/', (req, res) => {

    res.send(users);

});

router.post('/', (req, res) => {

    const user = req.body;

    users.push(user);

    res.send(`user with the name ${user.name} added to the database! `)

});


export default router;

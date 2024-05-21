const mongoose = require('mongoose');
const User = require('./models/User.js');
const { faker } = require('@faker-js/faker');
const readline = require('readline');


mongoose.connect('mongodb://localhost:27017/user_management')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const fn = async () => {
    const newUser = new User({ name: faker.internet.userName(), dob: faker.date.past(), contact: faker.phone.number(), email: faker.internet.email(), description: faker.lorem.paragraph() });
    await newUser.save();
    console.log(newUser);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of times to loop: ', async (answer) => {
    const loopCount = parseInt(answer);

    for (let i = 0; i < loopCount; i++) {
        await fn();
    }

    rl.close();
});


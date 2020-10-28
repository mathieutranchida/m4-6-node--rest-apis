const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...

// Use with GET method in server.js to access the client database
const accessClientsDb = (req, res) => {
    res.status(200).json({status: 200, data: clients})
}

// Use with GET method in server.js to access a unique client in the database
const accessClientById = (req, res) => {
    const foundClient = clients.find((client) => {
        return req.params.id === client.id 
        })
    if (foundClient) {
        return res.status(200).json({status: 200, data: foundClient})
    } else {
        return res.status(400).json({status: 400, message: "Error: client ID does not exist."})
    }
}

// Use with POST method in server.js to add a new client to the database
const addNewClient = (req, res) => {
    const newClient = req.body;
    let returningUser = false;
    if (clients.find((client) => {
        return client.email === newClient.email
    })) {
        returningUser = true;
    }
    if (returningUser === false) {
        newClient.id = uuidv4();
        clients.push(newClient);
        return res.status(201).json({status: 201, message: "User created successfully!"})
    } else if (returningUser === true) {
        return res.status(400).json({status: 400, message: "Email already in use."})
    }
}

// Use with DELETE method in server.js to remove a specific client from the database
const removeClient = (req, res) => {
    const foundClient = clients.find((client) => {
        return client.id === req.params.id
    })
    if (foundClient) {
        return res.status(200).json({status: 200, message: "User deleted successfully!"})
    } else {
        return res.status(400).json({status: 400, message: "Error: User ID doesn't exist. Could not delete the user from the database."})
    }
}

module.exports = {accessClientsDb, accessClientById, addNewClient, removeClient} 
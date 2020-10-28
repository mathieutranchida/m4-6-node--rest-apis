'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Import clientHandlers
const {accessClientsDb, accessClientById, addNewClient, removeClient} = require("./handlers/clientHandlers");
const {getWordById, getWordsDb, getHiddenWord, getGuess} = require("./handlers/hangmanHandlers")

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

// End points for Exercise 2
  .get("/clients", accessClientsDb)
  .get("/client/:id", accessClientById)
  .post("/client-signup", addNewClient)
  .delete("/remove-client/:id", removeClient)

// End points for Exercise 3
  .get("/hangman/words", getWordsDb)
  .get("/hangman/word/:id", getWordById)
  .get("/hangman/word", getHiddenWord)
  .get("/hangman/guess/:id/:letter", getGuess)


  .listen(8000, () => console.log(`Listening on port 8000`));

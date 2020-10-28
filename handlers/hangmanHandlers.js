const { words } = require('../data/words');

// write your handlers here...

const getWordsDb = (req, res) => {
    return res.status(200).json({status: 200, data: words})
}

const getWordById = (req, res) => {
    const foundWord = words.find((word) => {
        return req.params.id === word.id
    })
    if (foundWord) {
        return res.status(200).json({ status: 200, data: foundWord})
    } else {
        return res.status(400).json({status: 400, message: "Error"})
    }
}

const getHiddenWord = (req, res) => {
    const wordIndex = Math.floor(Math.random() * (words.length - 1));
    const wordId = words[wordIndex].id;
    const wordLength = words[wordIndex].letterCount;
    return res.status(200).json({status: 200, data: {id: wordId, letterCount: wordLength}})
}

const getGuess = (req, res) => {
    const foundWord = words.find((word) => {
        return req.params.id === word.id
    })
    console.log(foundWord);
    if (foundWord === undefined) {
        return res.status(400).json({status: 400, message: "Error: The ID you are looking for doesn't exist"})
    } else {
        let splittedWord = foundWord.word.split("").map((letter) => {
            if(letter === req.params.letter) {
                return true;
            } else {
                return false;
            }
        });
        return res.status(200).json({status: 200, data: splittedWord})
    }
}

module.exports = { getWordsDb, getWordById, getHiddenWord, getGuess }
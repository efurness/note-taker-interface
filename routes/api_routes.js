const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../db/methods.js');
const uuid = require('../helpers/uuid.js');

// GET Route for retrieving all the feedback
router.get('/notes', (req, res) => {
  console.log(`${req.method} request received for notes`);

  readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});
router.post('/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit notes`);
  
    // Destructuring assignment for the items in req.body
    const { text, title } = req.body;
  
    // If all the required properties are present
    if (text && title) {
      // Variable for the object we will save
      const newNotes = {
        id:uuid(),
        text,
        title,
    
      };
  
      readAndAppend(newNotes, './db/db.json');
  
      const response = {
        status: 'success',
        body: newNotes,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting notes');
    }
  });
// DELETE Route for a specific tip
router.delete('/notes/:id', (req, res) => {
    const notesText = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.id !== notesText);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${notesText} has been deleted 🗑️`);
      });
  });  
module.exports = router;

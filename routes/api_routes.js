const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../db/methods.js');

// GET Route for retrieving all the feedback
router.get('/notes', (req, res) => {
  console.log(`${req.method} request received for notes`);

  readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit notes`);
  
    // Destructuring assignment for the items in req.body
    const { text, title } = req.body;
  
    // If all the required properties are present
    if (text && title) {
      // Variable for the object we will save
      const newNotes = {
        text,
        title,
    
      };
  
      readAndAppend(newNotes, './db/methods.json');
  
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
router.delete('/:tip_id', (req, res) => {
    const tipId = req.params.tip_id;
    readFromFile('./db/tips.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all tips except the one with the ID provided in the URL
        const result = json.filter((tip) => tip.tip_id !== tipId);
  
        // Save that array to the filesystem
        writeToFile('./db/tips.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${tipId} has been deleted 🗑️`);
      });
  });  
module.exports = router;

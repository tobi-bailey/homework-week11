// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var getNotes = require("./getNotes");
var saveNote = require("./saveNote");
var deleteNote = require("./deleteNote");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route to notes
app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Basic route to main page
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Read JSON
app.get("/api/dp", function(req, res) {
  return res.json(getNotes);
});

// Create New Note
app.post("/api/notes", saveNote,
function(data){
  if (data){
    alert("Your note has been saved");
  }
  else{
    alert("Sorry, no note to save");
  }
});

// Delete Note
app.delete("/api/notes/:id", deleteNote, 
function(id){
  if (id){
    alert("Your note has been deleted");
  }
  else{
    alert("No note with that id found.");
  }
});
   
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

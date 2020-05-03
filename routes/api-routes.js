var fs = require("fs");
var db = require("../db/db.json");

// Read JSON
module.exports = function(app) {
app.get("/api/notes", function(req, res) {
    res.send(db)
  });

// Create New Note
  app.post("/api/notes", function(req, res) {
    // Take the request...
    var newNote = {
        title: req.body.title,
        text: req.body.text,
    }
    // read file 
    fs.readFile("./db/db.json", function(err, data) {
    if (err) throw err;
    console.log(data);
    var notes = JSON.parse(data)
    notes.push(newNote)
    fs.writeFile("./db/db.json", (JSON.stringify(notes)), function(err){
        if (err) throw err; 
        res.send(db)
    });
  });
  })

}
  
  // Delete Note
  // app.delete("/api/notes/:id", deleteNote, 
  // function(id){
  //   if (id){
  //     alert("Your note has been deleted");
  //   }
  //   else{
  //     alert("No note with that id found.");
  //   }
  // });
  


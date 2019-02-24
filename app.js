const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

app.listen(process.env.PORT || 3000, function() {
  console.log('My app listening on port 3000!')
});

var dogs = [
  {
    name: "Kira",
    hungry: "yes",
    colour: "Brown and White"
  },
  {
    name: "Tez",
    hungry: "yes",
    colour: "Gray"
  }
]

app.post('/hungry/:dog/:state', function (request, response, next) { 
  for(var i = 0; i < dogs.length; i++) {
    if(dogs[i].name == request.params.dog) {
      dogs[i].hungry = request.params.state
      response.sendStatus(200)
      return;
    }
  }
  response.status(400).send({"error": "Can't find that dog, sunshine."});
});

app.get('/dogs', function (request, response, next) { 
  response.send(dogs);
});

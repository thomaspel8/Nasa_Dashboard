import logo from './logo.svg';
import './App.css';
import Evenement from './Screen/Evenement';

/*const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());*/

function App() {
  return (
    <Evenement/>
  );
}

/*app.set('view engine', 'ejs');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/add', (req, res) =>{
  res.render('Add');
})

app.post('/add-to-diary', (req, res) =>{
  res.send(req.body);
})

app.listen(3000, () => console.log('server is running'));*/

export default App;
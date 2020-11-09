const app  = require('express')();
const cors = require('cors');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());


const moves = [
  { move: "paper", kills: "rock"},
  { move: "rock", kills: "scissors"},
  { move: "scissors", kills: "paper"}
]

let jugadas = [];
let ganadores = [];

  app.get('/moves', async (req, res) => {
    await res.send(moves);
  })
  .post('/moves', async (req, res) => {
    var move = req.body;
    moves.push({ move:move.move, kills:move.kills });
    await res.send(move);
  })
  .put('/moves/:id', async (req, res) => {
    var move = req.body;
    var id = req.params.id;
    moves[id] = move;
    await res.send(move);
  })
  .delete('/moves/:id', async (req, res) => {
    moves.splice(req.params.id, 1);
    await res.send();
  });

  //Guardar resultados
  app.post('/', async (req, res) => {
    var juego = req.body
    jugadas.push({ 'Jugador 1':juego.move[0], 'Jugador 2': juego.move[1], resultado: juego.resultado })
    await res.send(jugadas[jugadas.length - 1])
  });

http.listen(4000);
console.log('Escuchando en puerto 4000')
const express = require('express')
const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  console.log('arduino ready')
});
let led 
const app = express()

app.get('/on', (req, res) => {
     led = new Led(11);    

    led.fadeIn();
    res.send({ status: 'Led ON'})
})

app.get('/off', (req, res) => {
    if (!led) led = new Led(11);

    led.fadeOut();
      
    res.send({ status: 'Led OFF'})
})

app.listen(3000, () => console.log('server ready'))
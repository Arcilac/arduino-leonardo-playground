import { Hono } from 'hono'

import { Board, Led } from 'johnny-five'

const board = new Board();

board.on("ready", () => {
  console.log('arduino ready')
});

const app = new Hono()

app.get('/', (c) => c.text('Hono!'))


  let led 

  
  app.get('/on', (c) => {
       led = new Led(11);    
  
      led.fadeIn();
      c.text({ status: 'Led ON'})
  })
  
  app.get('/off', (c) => {
      if (!led) led = new Led(11);
  
      led.fadeOut();
        
      c.text({ status: 'Led OFF'})
  })

export default app
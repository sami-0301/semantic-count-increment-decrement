import './App.css';
import React, { useState } from 'react';
import { Button,Segment,Grid,Header,Container, GridColumn } from 'semantic-ui-react';

function App() {
  const [count, setCount] = useState(0)

  function decrementCount(){
    setCount(count >0? count - 1:0)
  }
  function incrementCount(){
    setCount(count => count + 1)
  }
  return (
    <Container textAlign='center'>
      <Segment raised style={{margin:"15% 37% 5%", padding:"4% 4.1% ", borderRadius:"8px"}}>
        <Grid Columns={2}>
          <Container textAlign='center'>
            <header as="h1">count</header><br></br>
            <header as="h1">{count}</header>
          </Container>
          <Grid.Row>
          <Button color='green' onClick={decrementCount}>decrement</Button>&nbsp;
          <Button color='red' onClick={incrementCount}>increment</Button>
          </Grid.Row>
    </Grid>

    </Segment>
    <h4>Done By:samiksha--12013281</h4>

    </Container>
    
  );
}

export default App;

import * as React from 'react';
// import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse={true} fixedTop={true}>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
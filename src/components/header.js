import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../styles/header.css';

class Header extends React.Component {

    render() {
        return(
            <div>
                <Jumbotron className="jubotron">
                    <h1 className="display-3">Windsurf Norge</h1>
                    <p className="lead">Velkommen til Windsruf Norge. På denne siden kan du finne informasjon om steder å windsrufe i Norge</p>
                    <hr className="my-2" />
                    <p>Trykk på knappen for å få en liste over alle windsurfe stedene lagret på siden</p>
                    <p className="lead">
                    <Button color="primary">Windsurf spots</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;
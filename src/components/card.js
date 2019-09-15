import React from 'react';
import Spot from './spot'
import { Card } from 'react-bootstrap';
import '../styles/card.css'


class SpotCard extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        showSpotModal: false,
      }
    }

    onCardClick = () => {
      this.setState({showSpotModal: !this.state.showSpotModal});
    }

    render(){
      return(
        <div className={"sb-card"}>
          <Card style={{ width: '18rem' }} onClick={() => this.onCardClick()}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
            <Card.Body>
              <Card.Title>{this.props.spot.name}</Card.Title>
              <Card.Text>{this.props.spot.description}</Card.Text>
            </Card.Body>
          </Card>
          {this.state.showSpotModal && <Spot show={true} onHide={() => this.onCardClick()} spot={this.props.spot}/>}
        </div>
      );
    }
}

export default SpotCard;
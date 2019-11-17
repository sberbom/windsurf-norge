import React from 'react';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import '../styles/card.css'


class SpotCard extends React.Component {

    onCardClick = () => {
      this.props.setActiveSpot(this.props.spot);
      this.props.history.push("/spot/"+this.props.spot.name);
    }

    render(){
      const pic = this.props.spot.picture ? this.props.spot.picture : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
      return(
        <div className={"sb-card"}>
          <Card style={{ width: '18rem' }} onClick={() => this.onCardClick()}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
              <Card.Title>{this.props.spot.name}</Card.Title>
              <Card.Text>{this.props.spot.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
}

export default withRouter(SpotCard);
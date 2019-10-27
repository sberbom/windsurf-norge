import React from "react";
import { Modal } from 'react-bootstrap';
import '../styles/photogallery.css'

class Photogallery extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activePhoto: ""
        }
    }

    onPhotoClick = (event) => {
        this.setState({activePhoto: event.target.src});
    }

    handleClose = () => {
        this.setState({activePhoto: ""});
    }

    render() {
        let column1 = []
        let column2 = []
        let column3 = []
        let i = 1

        if(this.props.photos){
            for(var n=0; n<this.props.photos.length; n++){
                if(i===1){
                    column1.push(<img src={this.props.photos[n].url} key={n} alt={"img"} onClick={this.onPhotoClick}/>);
                    i=2;
                }
                else if(i===2){
                    column2.push(<img src={this.props.photos[n].url} key={n} alt={"img"} onClick={this.onPhotoClick}/>);
                    i=3
                }
                else if(i===3){
                    column3.push(<img src={this.props.photos[n].url} key={n} alt={"img"} onClick={this.onPhotoClick}/>);
                    i=1
                }
            }
        }     
        
        return (
            <div className="gallery-container">
                <div className="column">
                    {column1}
                </div>
                <div className="column">
                    {column2}
                </div>
                <div className="column">
                    {column3}
                </div>
                <Modal centered animation={false} className={"gallary-modal"}show={this.state.activePhoto !== ""} onHide={this.handleClose}>
                    <img className="modalImage" src={this.state.activePhoto} alt={"img"}/>
                </Modal>
            </div>
        );
    }
}

export default Photogallery;


import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import '../styles/tabbar.css'

class Tabbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeKey: props.activeKey
        }
    }

    setKey = (k) => {
        this.setState({activeKey: k})
        this.props.scrollTo(k);
    }

    

    render() {
        return(
            <Tabs className="tabbar" activeKey={this.props.activeKey} onSelect={k => this.setKey(k)} >
                <Tab eventKey="top" title="Topp" />
                <Tab eventKey="spots" title="Populære spots" />
                <Tab eventKey="map" title="Kart" />
            </Tabs>
            )
    }
}

export default Tabbar;
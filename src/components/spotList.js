import React from 'react' 
import Card from './card'
import '../styles/spotList.css'

class SpotList extends React.Component {
    render(){
        return(
            <div className="spotList">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default SpotList;
import React from 'react';
import Header from '../components/header';
import SpotList from '../containers/spotList'
import Map from '../containers/map';
import Title from '../components/title';
import Tabbar from '../components/tabbar';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tab : "top",
        }
    }
    
    listenScrollEvent = e => {
        if (window.scrollY > window.innerHeight+this.getSpotHeigth()) {
            this.setState({tab: "map"});
        }
        else if (window.scrollY > window.innerHeight*0.7) {
            this.setState({tab: "spots"});
        } 
        else if (window.scrollY < window.innerHeight*0.7) {
            this.setState({tab: "top"});
        }
        
      }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll",this.listenScrollEvent)
    }

    scrollto = (pos) => {
        console.log("called")
        switch (pos) {
            case "top":
                window.scroll({top: 0, left: 0, behavior: 'smooth' });
                break;
            case "spots":
                window.scroll({top: window.innerHeight*0.8, left: 0, behavior: 'smooth' });
                break;
            case "map":
                window.scroll({top: window.innerHeight+this.getSpotHeigth()+10, left: 0, behavior: 'smooth' });
                break;
            default:
                break;
        }
    }
    
    render() {
        return(
            <div className="content">
                <Header/>
                <Tabbar activeKey={this.state.tab} scrollTo={this.scrollto}/>
                <div className="mainContent">
                    <Title title={"Populære spots"}/>
                    <SpotList number={6}  getHeight={height => this.getSpotHeigth = height}/>
                    <Title title={"Kart"}/>
                    <Map/>
                </div>
            </div>
        );
    }
}

export default Home;
import React from 'react';
import '../styles/title.css'

const Title = (props) => {
    return(
        <div>
            <hr className={"lineBreaker"}/>
            <h2 className={"title"}>{props.title}</h2>
        </div>
    );
}

export default Title;
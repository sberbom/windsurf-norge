import React from 'react';
import '../styles/title.css'

const Title = (props) => {
    return(
        <div>
            {/* <hr className={"lineBreaker"}/> */}
            <h1 className={"title fancy"}><span>{props.title}</span></h1>
        </div>
    );
}

export default Title;
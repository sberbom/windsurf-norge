import React from 'react';
import {Form, Button} from 'react-bootstrap';
import LogIn from '../containers/logIn';
import '../styles/comments.css'

class Comments extends React.Component {

    constructor(props) {
        super (props);
        this.state = {
            newComment : "",
            showLogIn : false
        }
    }

    onCommentChange = (e) => {
        this.setState({newComment: e.target.value})
    }

    onSubmit = () => {
        if(!this.props.user) {
            this.setState({showLogIn: true})
        }
        else if(this.state.newComment !== "") {
            fetch('http://localhost:3300/spot/update', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: { "name": this.props.spot.name },
                    update: {
                        "$push": {
                            "comments": { user: this.props.user.username, comment: this.state.newComment }
                        }
                    },
                    options: { "upsert": false }
                })
            })
                .then(response => response.json())
                .then(res => {
                    if (res) {
                        console.log(res);
                    }
                })
            this.setState({newComment: ""})
        }
    }

    
    render() {
        console.log(this.state)
        let comments = [];
        if(this.props.comments){
            this.props.comments.forEach((comment, index) => {
                comments.push(
                    <div key={index} className="commentContainer">
                        <p className="userCommment">{comment.user}  :</p>
                        <p className="comment">{comment.comment}</p>
                    </div>
                );
            }); 
        }
        return(
            <div className="comments">
                <Form className="commentForm">
                    <Form.Group controlId="commentForm">
                        <Form.Control 
                            as="textarea" 
                            className="newComment" 
                            rows="2" 
                            type="text" 
                            placeholder="Ny kommentar"
                            onChange={this.onCommentChange} />
                        <Button onClick={this.onSubmit}>
                            Kommenter
                        </Button>
                    </Form.Group>
                </Form>
                {comments}
                {this.state.showLogIn && <LogIn handleClose={() => this.setState({showLogIn: false})}/>}
            </div>
        )
    }
}

export default Comments;
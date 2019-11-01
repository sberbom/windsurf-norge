import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';
import '../styles/fileupload.css'

class Fileupload extends React.Component {

    constructor( props ) {
		super( props );
		this.state = {
		 selectedFile: null,
		 selectedFiles: null
		}
	   }

	singleFileChangedHandler = ( event ) => {
		this.setState({
		 	selectedFile: event.target.files[0]
		});
	};

	multipleFileChangedHandler = (event) => {
		this.setState({
			selectedFiles: event.target.files
		});
		console.log(event.target.files);
	};

	singleFileUploadHandler = ( event ) => {
		const data = new FormData();
		// If file selected
		if (this.state.selectedFile) {
			data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
			axios.post('/profile/profile-img-upload', data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then((response) => {
					if (200 === response.status) {
						// If file size is larger than expected.
						if (response.data.error) {
							if ('LIMIT_FILE_SIZE' === response.data.error.code) {
								this.ocShowAlert('Max size: 2MB', 'red');
							} else {
								console.log(response.data);
								// If not the given file type
								this.ocShowAlert(response.data.error, 'red');
							}
						} else {
							// Success
							let fileName = response.data;
							console.log('filedata', fileName);
							this.ocShowAlert('File Uploaded', '#3089cf');
						}
					}
				}).catch((error) => {
					// If another error
					this.ocShowAlert(error, 'red');
				});
		} else {
			// if file not selected throw error
			this.ocShowAlert('Please upload file', 'red');
		}
	};

	multipleFileUploadHandler = () => {
		const data = new FormData();
		let selectedFiles = this.state.selectedFiles;
		// If file selected
		if (selectedFiles) {
			for (let i = 0; i < selectedFiles.length; i++) {
                data.append('galleryImage', selectedFiles[i], selectedFiles[i].name);
            }
            data.append('user', this.props.user);
			axios.post('/profile/multiple-file-upload', data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then((response) => {
					console.log('res', response);
					if (200 === response.status) {
						// If file size is larger than expected.
						if (response.data.error) {
							if ('LIMIT_FILE_SIZE' === response.data.error.code) {
								this.ocShowAlert('Max size: 4MB', 'red');
							} else if ('LIMIT_UNEXPECTED_FILE' === response.data.error.code) {
								this.ocShowAlert('Max 10 images allowed', 'red');
							} else {
								// If not the given ile type
								this.ocShowAlert(response.data.error, 'red');
							}
						} else {
							// Success
							let fileName = response.data;
							console.log('fileName', fileName);
                            this.ocShowAlert('File Uploaded', '#3089cf');
                            for(var i = 0; i<fileName.locationArray.length; i++) {
                                console.log(fileName.locationArray[i])
                                this.updateDB(fileName.locationArray[i]);
                            }
						}
					}
				}).catch((error) => {
					// If another error
					this.ocShowAlert(error, 'red');
				});
		} else {
			// if file not selected throw error
			this.ocShowAlert('Please upload file', 'red');
		}
    };
    
    updateDB = (url) => {
        fetch('http://localhost:3300/spot/update', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: { "name": this.props.spot.name },
                update: {
                    "$push": {
                        "photos": { url: url, user: this.props.user.username }
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
    }

	// ShowAlert Function
	ocShowAlert = (message, background = '#3089cf') => {
		let alertContainer = document.querySelector('#oc-alert-container'),
			alertEl = document.createElement('div'),
			textNode = document.createTextNode(message);
		alertEl.setAttribute('class', 'oc-alert-pop-up');
		$(alertEl).css('background', background);
		alertEl.appendChild(textNode);
		alertContainer.appendChild(alertEl);
		setTimeout(function () {
			$(alertEl).fadeOut('slow');
			$(alertEl).remove();
		}, 3000);
	};

    render() {
        console.log(this.props)
        return (
            <Modal show={true} onHide={this.props.handleClose} centered size="lg" dialogClassName="fileupload">
                <Modal.Header closeButton>
                    <Modal.Title>Last opp bilder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* For Alert box*/}
                    <div id="oc-alert-container"></div>

                    <input type="file" multiple onChange={this.multipleFileChangedHandler} />
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Lukk
                    </Button>
                    <Button onClick={this.multipleFileUploadHandler}>Last opp!</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Fileupload;
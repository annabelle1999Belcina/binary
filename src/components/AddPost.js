import React, { Component } from 'react'
import { Form, Input, Card, Button, Icon } from 'semantic-ui-react'
// import PostHeader from './PostHeader'
import '../App.css';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';
const base = 'http://localhost:4000';
const fs = require('fs');


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            posts: [],
            logout: false,
            file: null,
            description: "",
            foodName: "",
            ingredients: "",
            procedure: ""
        }
    }





    onFormSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('myImage', this.state.file);
        // console.log(req.file);
        // console.log(req.file.filename);
        if (!this.state.file.files) {
            var file = fs.readFileSync(this.state.file.path);
            console.log(file)
            // var encode_image = file.toString('base64');
        }
        let url = 'http://localhost:4000/' + this.state.file.filename;
        const data = {
            userId: this.state.user._id,
            foodName: this.state.foodName,
            description: this.state.description,
            image: url,
            ingredients: this.state.ingredients,
            procedure: this.state.procedure,
        };
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
        axios.post(`${base}/uploads/uploadmulter`, data)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }
    onChange = (e) => {
        this.setState({ file: e.target.value });
    }
    render() {
        return (
            <div className="boxPost">
                <Card.Group >
                    <div className="post">
                        <Form onSubmit={this.onFormSubmit}>
                            <Form.Group>
                                <Form.Field label="What's my Dish?"
                                    style={{
                                        fontSize: 20,
                                    }}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='Name of your Dishes..' onChange={e => this.setState({ foodName: e.target.value })}
                                    style={{
                                        fontSize: 15,
                                        fontSize: 20,
                                        width: 300,
                                    }}
                                    required
                                />
                                <Input type='file' name="myImage" onChange={this.onChange}
                                    style={{
                                        width: 300
                                    }}
                                    required
                                ></Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.TextArea placeholder='Description'
                                    onChange={e => this.setState({ description: e.target.value })}
                                    style={{
                                        width: 300,
                                        fontSize: 15,
                                    }}
                                    required
                                />
                                <Form.TextArea placeholder='Ingredient'
                                    onChange={e => this.setState({ ingredients: e.target.value })}
                                    style={{
                                        width: 300,
                                        fontSize: 15,
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.TextArea placeholder='Procedure'
                                    onChange={e => this.setState({ procedure: e.target.value })}
                                    style={{
                                        width: 300,
                                        fontSize: 15,
                                    }}
                                    required
                                />
                                <Form.Button
                                    type="submit"
                                    style={{
                                        fontSize: 20,
                                    }}
                                >
                                    POST
                                </Form.Button>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="profile">
                        <ProfileInfo user={this.state.user} />
                    </div>
                </Card.Group>
            </div>
        );
    }
}

export default AddPost
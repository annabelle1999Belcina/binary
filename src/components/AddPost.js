import React, { Component } from 'react'
import { Form, Input, Card, Button, Icon } from 'semantic-ui-react'
// import PostHeader from './PostHeader'
import '../App.css';
import AppBarfile from './AppBarfile';
import { thisExpression } from '@babel/types';
import axios from 'axios';
const base = 'http://localhost:4000';
const multer = require('multer');
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
        console.log(req.file);
        console.log(req.file.filename);
        if (!req.files) {
            var file = fs.readFileSync(req.file.path);
            console.log(file)
            // var encode_image = file.toString('base64');
        }
        let url = 'http://localhost:4000/' + req.file.filename;
        const data = {
            userId: this.state.user._id,
            foodName: this.state.foodName,
            description: this.state.description,
            image: this.state.file,
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
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group>
                            <Form.Field label="What's my Dish?"
                                style={{
                                    width: -2,
                                    fontSize: 30,
                                    marginTop: 15,

                                    marginLeft: 10
                                }}



                            />
                            <Form.Input placeholder='Name of your Dishes..' onChange={e => this.setState({ foodName: e.target.value })}
                                style={{
                                    width: 300,
                                    fontSize: 20,
                                    height: 60,
                                    marginTop: 5,
                                }}
                                required
                            />
                            <Form.TextArea placeholder='Description'
                                onChange={e => this.setState({ description: e.target.value })}
                                style={{
                                    width: 500,
                                    height: 60,
                                    fontSize: 20,
                                    marginTop: 5
                                }}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Input type='file' name="myImage" onChange={this.onChange}
                                style={{
                                    width: 300,
                                    height: 100,

                                    marginTop: -10
                                }}
                                required

                            ></Input>
                            <Form.TextArea placeholder='Ingredient'
                                onChange={e => this.setState({ ingredients: e.target.value })}
                                style={{
                                    width: 350,
                                    height: 100,

                                    fontSize: 20,
                                    marginTop: -10
                                }}
                                required
                            />
                            <Form.TextArea placeholder='Procedure'
                                onChange={e => this.setState({ procedure: e.target.value })}
                                style={{
                                    width: 350,
                                    height: 100,

                                    fontSize: 20,
                                    marginTop: -10
                                }}
                                required
                            />
                            <Form.Button
                                type="submit"
                                style={{
                                    marginTop: -3,
                                    fontSize: 20,
                                }}
                            >
                                POST
                                </Form.Button>
                        </Form.Group>
                    </Form>
                </Card.Group>
            </div>
        );
    }
}

export default AddPost
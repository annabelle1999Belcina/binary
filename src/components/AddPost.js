import React, { Component } from 'react'
import { Form, Input, Card, Button, Icon } from 'semantic-ui-react'
// import PostHeader from './PostHeader'
import '../App.css';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';
import Store from './store';
const base = 'http://localhost:4000';
const fs = require('fs');



class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            posts: [],
            logout: false,
            file: "",
            description: "",
            foodName: "",
            ingredients: "",
            procedure: ""
        }
    }
    

    _handleSubmit(e) {
        // e.preventDefault();
        // // TODO: do something with -> this.state.file
        // console.log('handle uploading-', this.state.file);
        e.preventDefault();
        var data = new FormData();
        data.append('user', this.state.user);
        data.append('foodName', this.state.foodName);
        data.append('description', this.state.description);
        data.append('image', this.state.file);
        data.append('ingredients', this.state.ingredients);
        data.append('procedure', this.state.procedure);
        axios.post(`http://localhost:4000/uploads/uploadmulter`,
          data
        ).then(res => {
          Store.feeds.push(res);
          this.setState({ description: "", file: "",foodName: "",ingredients: "",procedure: "" })
    
        })
          .catch(error => {
            console.error("file upload failed", error);
          });
    
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    
      }
    

    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    //   onChange = (e) => {
    //     this.setState({ imageDescription: e.target.value });
    //   }



    // onChange = (e) => {
    //     this.setState({ file: e.target.value });
    // }
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
                                <Input type='file' name="myImage" onChange={(e) => this._handleImageChange(e)}    
                                    style={{
                                        width: 300
                                    }}
                                    key={this.state.file}
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
                                    // this.setState ={this.state.file === "" && this.state.description === ""}
                                    
                                    onClick={(e) => this._handleSubmit(e)}
                                    
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


    // onFormSubmit = (e) => {
    //     e.preventDefault();
    //     // const formData = new FormData();
    //     // formData.append('myImage', this.state.file);
    //     // console.log(req.file);
    //     // console.log(req.file.filename);
    //     if (!this.state.file.files) {
    //         var file = fs.readFileSync(this.state.file.path);
    //         console.log(file)
    //         // var encode_image = file.toString('base64');
    //     }
    //     let url = 'http://localhost:4000/' + this.state.file.filename;
    //     const data = {
    //         userId: this.state.user._id,
    //         foodName: this.state.foodName,
    //         description: this.state.description,
    //         image: url,
    //         ingredients: this.state.ingredients,
    //         procedure: this.state.procedure,
    //     };
    //     // const config = {
    //     //     headers: {
    //     //         'content-type': 'multipart/form-data'
    //     //     }
    //     // };
    //     axios.post(`${base}/uploads/uploadmulter`, data)
    //         .then((response) => {
    //             alert("The file is successfully uploaded");
    //         }).catch((error) => {
    //         });
    // }
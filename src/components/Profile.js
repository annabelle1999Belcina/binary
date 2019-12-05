import React, { Component } from 'react'
import { Form, Input, Card, Icon } from 'semantic-ui-react'
// import PostHeader from './PostHeader'
import '../App.css';
import AppBarfile from './AppBarfile';
import axios from 'axios';
const base = 'http://localhost:4000';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            posts: [],
            logout: false,
            file: null,
            description:"",
            foodName:"",
            ingredients:"",
            procedure:""
        }
    }

    // handleOnClick = async e => {
    //     axios.get(`${base}/getUser/` + this.state.userName)
    //       .then(res => {
    //         if (res.data != null) {
    //           this.setState({ loginSuccess: false, error: true, user: res.data })
    //           console.log(this.state.user)
    //         }
    //         else {
    //           this.setState({ loginSuccess: true, error: false })
    //         }
    //       })
    //   }
      componentDidMount() {
        // const datas = [];
        axios.get(`${base}/posts/retrieve`)
          .then(response => {
            for (let index = 0; index < response.data.length; index++) {
              this.state.posts.push(response.data[index]);
            }
            this.setState({ readyToLoad: true })
          })
          .catch((error) => {
            console.log(error);
          })
        console.log(this.state.posts);
      }

    onFormSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('myImage', this.state.file);
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
        axios.post(`${base}/post`, data)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }

    onChange = (e) => {
        this.setState({ file: e.target.value });
    }

    DishName = (e) => {
        console.log(this.state.user)
    }

    ProfileInfoCard = () => (
        <Card style={{ marginLeft: '2%', marginRight: '100%' }}>
            <Card.Content>About {this.state.user.firstName} {this.state.user.lastName}</Card.Content>
            <Card.Content>{this.state.user.gender}</Card.Content>
            <Card.Content>{this.state.user.userName}</Card.Content>
            <Card.Content>{this.state.user.email}</Card.Content>
            <Card.Content>{this.state.user.signUpDate}</Card.Content>

            <Card.Content extra>
                <Icon name='user' />4 Friends
            </Card.Content>
        </Card>

    )


    render() {
        return (
            <div>
                <AppBarfile user={this.state.user} />
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
                                <Form.TextArea  placeholder='Description'
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
                                <Input type='file'  name = "myImage" onChange={this.onChange}
                                    style={{
                                        width: 300,
                                        height: 100,

                                        marginTop: -10
                                    }}
                                    required
                                    
                                ></Input>
                                <Form.TextArea  placeholder='Ingredient'
                                onChange={e => this.setState({ ingredients: e.target.value })}
                                    style={{
                                        width: 350,
                                        height: 100,

                                        fontSize: 20,
                                        marginTop: -10
                                    }}
                                    required
                                />
                                <Form.TextArea  placeholder='Procedure'
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
                                    type = "submit"
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
                <this.ProfileInfoCard />
            </div>
        );
    }
}

export default Profile
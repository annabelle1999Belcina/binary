import React, { Component } from 'react'
import { Form, Input, Card, Button,Icon } from 'semantic-ui-react'
// import PostHeader from './PostHeader'
import '../App.css';
import AppBarfile from './AppBarfile';
import { thisExpression } from '@babel/types';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            posts: [],
            logout: false
        }
    }



    DishName = (e) => {
        console.log(this.state.user)
    }

    ProfileInfoCard = () => (
        <Card style={{marginLeft:'2%', marginRight: '100%' }}>
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
                <AppBarfile user={this.state.user}/>
                <div className="boxPost">
                    <Card.Group >
                        <Form >
                            <Form.Group>
                                <Form.Field label="What's my Dish?"
                                    style={{
                                        width: -2,
                                        fontSize: 30,
                                        marginTop: 15,

                                        marginLeft: 10
                                    }}
                                    value={this.state.DishName}


                                />
                                <Form.Input fluid placeholder='Name of your Dishes..'
                                    style={{
                                        width: 300,
                                        fontSize: 20,
                                        height: 60,
                                        marginTop: 5,
                                    }}
                                    required
                                />
                                <Form.TextArea fluid placeholder='Description'
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
                                <Input type='file' fluid
                                    style={{
                                        width: 300,
                                        height: 100,

                                        marginTop: -10
                                    }}
                                    required
                                />
                                <Form.TextArea fluid placeholder='Ingredient'
                                    style={{
                                        width: 350,
                                        height: 100,

                                        fontSize: 20,
                                        marginTop: -10
                                    }}
                                    required
                                />
                                <Form.TextArea fluid placeholder='Procedure'
                                    style={{
                                        width: 350,
                                        height: 100,

                                        fontSize: 20,
                                        marginTop: -10
                                    }}
                                    required
                                />
                                <Form.Button
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
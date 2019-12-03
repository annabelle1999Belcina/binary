import React, { Component } from 'react'
import { Form, Input, Card,Button } from 'semantic-ui-react'
// import PostHeader from './PostHeader'
import '../App.css';
import Header from './Header';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            DishName: "",
            ListDescription: [],
            ListIngredient: [],
            ListProcedure: []
        }
    }
    

    DishName = (e) => {
        console.log(this.state.user)
    }

    render() {
        return (
            <div>
                <Header />
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
                                    OnSubmit

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
                        <Button
                                    style={{
                                        marginTop: -3,
                                        fontSize: 20,
                                    }} 
                                    onClick={e=>{ this.DishName(e) }}>
                                    POST
                                </Button>
                    </Card.Group>
                </div>
            </div>
        );
    }
}

export default Profile
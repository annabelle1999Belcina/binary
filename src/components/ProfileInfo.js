import React, { Component } from 'react'
import { Form, Input, Card, Button, Icon } from 'semantic-ui-react'

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }
    ProfileInfoCard = () => (
        <Card style={{ marginLeft: '2%', marginRight: '100%' ,float:"left",marginTop:"1%"}}>
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
                <this.ProfileInfoCard />
            </div>
        );
    }
}

export default ProfileInfo

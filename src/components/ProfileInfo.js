import React, { Component } from 'react'
import { Button, Header, Image, Modal, Card, } from 'semantic-ui-react'

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }
    ProfileInfoCard = () => (
        <Card style={{ fontSize: "100%" }}>
            <Card.Content>About {this.state.user.firstName} {this.state.user.lastName}</Card.Content>
            <Card.Content>{this.state.user.gender}</Card.Content>
            <Card.Content>{this.state.user.userName}</Card.Content>
            <Card.Content>{this.state.user.email}</Card.Content>
            <Card.Content>{this.state.user.signUpDate}</Card.Content>

            <Modal trigger={<Button>Edit Profile</Button>}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your e-mail
                            address.
        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
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

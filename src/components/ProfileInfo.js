import React, { Component } from 'react'
import { Button, Header, Image, Modal, Card } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }
    ProfileInfoCard = () => (
        <Card style={{ fontSize: "100%", border: "1px solid" }}>
            <Card.Content>About {this.state.user.firstName} {this.state.user.lastName}</Card.Content>
            <Card.Content>{this.state.user.gender}</Card.Content>
            <Card.Content>{this.state.user.userName}</Card.Content>
            <Card.Content>{this.state.user.email}</Card.Content>
            <Card.Content>{this.state.user.signUpDate}</Card.Content>
            <Card.Content>{this.state.user.address}</Card.Content>
            <Card.Content>{this.state.user.workPlace}</Card.Content>
            <Card.Content>{this.state.user.education}</Card.Content>
            <Card.Content>{this.state.user.relationShip}</Card.Content>
            <Card.Content>{this.state.user.bio}</Card.Content>

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
                        <form className={useStyles.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Gender" defaultValue={this.state.user.gender} /><br />
                            <TextField id="standard-basic" label="Username" defaultValue={this.state.user.userName} /><br />
                            <TextField id="standard-basic" label="Email" defaultValue={this.state.user.email} /><br />
                            <TextField id="standard-basic" label="Joined iCook" defaultValue={this.state.user.signUpDate} /><br />
                            <TextField id="standard-basic" label="Address" defaultValue={this.state.user.address} /><br />
                            <TextField id="standard-basic" label="Workplace" defaultValue={this.state.user.workPlace} /><br />
                            <TextField id="standard-basic" label="Education" defaultValue={this.state.user.education} /><br />
                            <TextField id="standard-basic" label="Relationship" defaultValue={this.state.user.relationShip} /><br />
                            <TextField
                                id="outlined-multiline-static"
                                label="Bio"
                                multiline
                                rows="4"
                                className={useStyles.textField}
                                margin="normal"
                                variant="outlined"
                                defaultValue={this.state.user.bio}
                            />
                        </form>
                        <Button variant="outlined" color="primary">
                            Update
                        </Button>
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

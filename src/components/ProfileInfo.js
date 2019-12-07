import React, { Component } from 'react'
import { Button, Header, Image, Modal, Card, } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
const base = 'http://localhost:4000';

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
            // fname: "",
            // lname: '',
            // gender: '',
            // email: '',
            // userName: '',
            // password: '',
            // verifypass: '',
            // address: " ",
            // workPlace: " ",
            // education: " ",
            // relationShip: "  ",
            // bio: " "
        }
    }
    onSubmit = async e => {
        console.log('sulod')
        e.preventDefault();
        const data = {
            firstName: this.state.user.fname,
            lastName: this.state.user.lname,
            gender: this.state.user.gender,
            userName: this.state.user.userName,
            email: this.state.user.email,
            // password: this.state.password,
            address: this.state.user.address,
            workPlace: this.state.user.workPlace,
            education: this.state.user.education,
            relationShip: this.state.user.relationShip,
            bio: this.state.user.bio
        };
        axios.put(`${base}/user/update/` + this.state.user._id, data)
            .then(res => {
                if (res.status !== 200) {
                    this.setState({
                        error: true,
                        loginSuccess: false,
                    });
                }
                else {
                    this.setState({
                        loginSuccess: true,
                        error: false,
                        // user: res
                    });
                    // console.log(res)
                }
            })
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
                        <Header>About {this.state.user.firstName} {this.state.user.lastName}</Header>
                        <form className={useStyles.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Gender" value={this.state.user.gender}  onChange={e => this.setState({ gender: e.target.value })}/><br />
                            <TextField id="standard-basic" label="Username" value={this.state.user.userName} onChange={e => this.setState({ userName: e.target.value })}/><br />
                            <TextField id="standard-basic" label="Email" value={this.state.user.email} /><br onChange={e => this.setState({ email: e.target.value })}/>
                            <TextField id="standard-basic" label="Joined iCook" value={this.state.user.signUpDate}/><br />
                            <TextField id="standard-basic" label="Address" value={this.state.user.address} onChange={e => this.setState({ address: e.target.value })}/><br />
                            <TextField id="standard-basic" label="Workplace" value={this.state.user.workPlace} onChange={e => this.setState({ workPlace: e.target.value })}/><br />
                            <TextField id="standard-basic" label="Education" value={this.state.user.relationShip} onChange={e => this.setState({ relationShip: e.target.value })}/><br />
                            <TextField id="standard-basic" label="Relationship" value={this.state.user.bio} onChange={e => this.setState({ bio: e.target.value })}/><br />
                            <TextField
                                id="outlined-multiline-static"
                                label="Bio"
                                multiline
                                rows="4"
                                className={useStyles.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            
                        </form>
                        <Button variant="outlined" color="primary" onClick={(e) => { this.onSubmit(e)}}>
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

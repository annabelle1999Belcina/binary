import React, { Component } from 'react'
import { Button, Header, Image, Modal, Card, } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';
import AddPost from './AddPost';
import LoginForm from './LoginForm';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import UserFeed from './UserFeed';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { ListItem, List, ListItemText } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FaceIcon from '@material-ui/icons/Face';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Grid from '@material-ui/core/Grid';


const base = 'http://localhost:4000';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const usestyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            userName: this.props.userName,
            toFeed: false,
            posts: [],
            readyToLoad: false,
            logout: false,
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
    toFeedClicked = (e) => {
        e.preventDefault();
        console.log("on account")
        this.setState({ toFeed: true });
    }
    logoutClicked = (e) => {
        e.preventDefault();
        console.log("logout")
        this.setState({ logout: true });
    }
    componentWillMount() {
        // const datas = [];
        axios.get('http://localhost:4000/posts/retrieve')
            .then(response => {
                console.log(response.data)
                for (let index = 0; index < response.data.length; index++) {
                    if (response.data[index].userName === this.state.userName) {
                        this.state.posts.push(response.data[index]);
                        this.setState({ readyToLoad: true })
                        // console.log("Okay")
                    } else {
                        // console.log("NOT")
                    }
                }
                this.setState({ readyToLoad: true });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    handleComment = id => {
        const data = {
            comment: this.state.comment,
            comment_from: this.state.user
        }
        axios.put('http://localhost:4000/addComment/' + id, data)
            .then((res) => {
                console.log(res.data)
                console.log('Comment successfully added.')
                this.setState({ comment: '' })
            }).catch((error) => {
                console.log(error)
            })
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

    AppBar = () => {
        const classes = usestyles();


        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: "orangered" }}>
                    <Toolbar>

                        <Button style={{ marginLeft: "80%" }} onClick={e => { this.toFeedClicked(e) }} color="inherit">User Feed</Button>
                        <Button onClick={e => { this.logoutClicked(e) }} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }


    ProfileInfoCard = () => (
        <Card style={{ fontSize: "100%" }}>
            <Card.Content>About {this.state.user.firstName} {this.state.user.lastName}</Card.Content>
            <Card.Content><FaceIcon style={{ marginRight: "2%" }} />{this.state.user.gender}</Card.Content><br></br>
            <Card.Content><HowToRegIcon style={{ marginRight: "2%" }} />{this.state.user.userName}</Card.Content><br></br>
            <Card.Content><MailOutlineIcon style={{ marginRight: "2%" }} />{this.state.user.email}</Card.Content><br></br>
            <Card.Content><EventNoteIcon style={{ marginRight: "2%" }} />{this.state.user.signUpDate}</Card.Content><br></br>

            <Modal trigger={<Button>Edit Profile</Button>}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>About {this.state.user.firstName} {this.state.user.lastName}</Header>
                        <form className={useStyles.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Gender" value={this.state.user.gender} onChange={e => this.setState({ gender: e.target.value })} /><br></br>
                            <TextField id="standard-basic" label="Username" value={this.state.user.userName} onChange={e => this.setState({ userName: e.target.value })} /><br></br>
                            <TextField id="standard-basic" label="Email" value={this.state.user.email} /><br onChange={e => this.setState({ email: e.target.value })} /><br></br>
                            <TextField id="standard-basic" label="Joined iCook" value={this.state.user.signUpDate} /><br></br>
                            <TextField id="standard-basic" label="Address" value={this.state.user.address} onChange={e => this.setState({ address: e.target.value })} /><br></br>
                            <TextField id="standard-basic" label="Workplace" value={this.state.user.workPlace} onChange={e => this.setState({ workPlace: e.target.value })} /><br></br>
                            <TextField id="standard-basic" label="Education" value={this.state.user.relationShip} onChange={e => this.setState({ relationShip: e.target.value })} /><br></br>
                            <TextField id="standard-basic" label="Relationship" value={this.state.user.bio} onChange={e => this.setState({ bio: e.target.value })} /><br></br>
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
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </Card>

    )
    CardExampleGroups = () => {

        console.log(this.state.posts)

        return (


            <Grid container spacing={3}>
                {this.state.posts.map(post => (
                    <Grid item xs={12} sm={4}>
                        <Card style={{
                            maxWidth: 400,
                            backgroundColor: "#FAD0C3",
                            marginLeft: "10px",
                            marginTop: "10px"
                        }}>

                            <CardHeader
                                title={post.foodName}
                                subheader={post.userName}
                            />
                            <CardMedia
                                style={{
                                    height: 0,
                                    paddingTop: '56.25%',
                                }}
                                image={post.image}
                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.description}</Typography>
                                <CardActions>
                                </CardActions>

                                <Modal trigger={<center><Button style={{ backgroundColor: "orangered", width: "30%" }}>Show More</Button></center>}>
                                    <Modal.Header>{post.foodName}</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size='medium' src={post.image} />
                                        <Modal.Description>
                                            <Header>{post.description}</Header>
                                            <label>Ingredients:</label>
                                            <p>{post.ingredients}</p>
                                            <label>Procedure:</label>
                                            <p >{post.procedure}</p>
                                            <label>Post Date:</label>
                                            <p >{post.postDate}</p>
                                        </Modal.Description>
                                    </Modal.Content>
                                    <label style={{ marginLeft: "3%", fontWeight: "bold" }}>Comments:</label>
                                    <List style={useStyles.rootList}>
                                        {post.comments.map(comment => (
                                            <ListItem style={{ background: "lightgray" }}>
                                                <CommentIcon style={{ marginRight: "1%" }} /> <ListItemText primary={comment.comment_from.firstName + " " + comment.comment_from.lastName} secondary={comment.comment} />
                                            </ListItem>
                                        ))}
                                    </List>

                                    <center>
                                        <EditIcon /> <TextField id="outlined-basic" variant="outlined" style={{
                                            width: 200,
                                            border: "20px",
                                            height: "60px",
                                            marginLeft: "10px"
                                        }}
                                            onChange={e => this.setState({ comment: e.target.value })}
                                        /> <Button variant="contained" color="primary" style={{
                                            width: 100,
                                            marginTop: "9px",
                                            marginRight: "10px",
                                            marginLeft: "5px"
                                        }}
                                            onClick={() => {
                                                this.handleComment(post._id);
                                                this.setState({ comment: "" })
                                            }}>
                                            Comment
                        </Button>
                                    </center>
                                </Modal>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>

        )
    }

    render() {
        const { toFeed, logout } = this.state
        if (toFeed === false && logout === false) {
            return (
                <div>
                    <this.AppBar />
                    <AddPost user={this.state.user} />

                    <div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={3}>
                                <this.ProfileInfoCard /></Grid>
                            <Grid item xs={12} sm={2}>
                                <this.CardExampleGroups />
                            </Grid>
                        </Grid>
                    </div >
                </div >
            )

        } else if (toFeed === true) {
            return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/userfeed' render={() => <UserFeed user={this.state.user}></UserFeed>}></Route>
                            <Redirect from='/account' to='userfeed'></Redirect>
                        </Switch>
                    </div>
                </BrowserRouter>
            )
        } else if (logout === true) {
            return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/login' render={() => <LoginForm></LoginForm>}></Route>
                            <Redirect from='/account' to='login'></Redirect>
                        </Switch>
                    </div>
                </BrowserRouter>
            )
        }

    }
}

export default ProfileInfo

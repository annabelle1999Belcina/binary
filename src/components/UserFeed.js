import React, { Component } from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { ListItem, List, ListItemText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import AppBarfile from './AppBarfile';
import TextField from '@material-ui/core/TextField';
import AddPost from './AddPost';
import axios from 'axios';
import { Button, Header, Image, Modal, } from 'semantic-ui-react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import ProfileInfo from './ProfileInfo';
import LoginForm from './LoginForm';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';

const base = 'http://localhost:4000';
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  rootList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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


class UserFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      comment: "",
      updated: false,
      like: 0,
      toAccount: false,
      logout: false,
      posts: [
        {
          userName: "",
          foodName: "Spaghetti",
          description: "This is my first post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvZYf1rcr0NygtykZZiygTwzbRMbPdCiNJAg78EwZHYoJhqIoi",
          ingredients: "",
          procedure: "",
          postDate: "September 14, 2016",
          comments: [{
            comment: '',
            comment_from: {
            }
          }]
        },
      ],
      readyToLoad: false,
    }
  }

  toAccountClicked = (e) => {
    e.preventDefault();
    console.log("on account")
    this.setState({ toAccount: true });
  }
  logoutClicked = (e) => {
    e.preventDefault();
    console.log("logout")
    this.setState({ toAccount: true });
  }
  componentDidMount() {
    // const datas = [];
    axios.get(`${base}/posts/retrieve`)
      .then(response => {
        console.log(response.data)
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

  handleComment = id => {
    console.log("comment")
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

  // handleLiker = () => {
  //     if(!this.state.updated) {
  //       console.log("Liked")
  //       this.setState((prevState, props) => {
  //           this.setState({likes: prevState.likes + 1})
  //           this.setState({updated: true})
  //       });
  //     }
  // }
  AppBar = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
    </Typography>
            <Button onClick={e => { this.toAccountClicked(e) }} color="inherit">Account</Button>
            <Button onClick={e => { this.logoutClicked(e) }} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  CardExampleGroups = () => {

    console.log(this.state.posts)

    return (

      <Grid container spacing={3}>
        {this.state.posts.map(post => (
          <Grid item xs={12} sm={4}>
            <Card style={{
              maxWidth: 400,
              backgroundColor: "pink",
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
                  {/* Like Or Heart */}
                  <IconButton aria-label="add to favorites" onClick={this.updateLikes}>
                    <FavoriteIcon />
                  </IconButton>
                  <p>{this.state.like}</p>
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
                  <List style={useStyles.rootList}>
                    {post.comments.map(comment => (
                      <ListItem>
                        <ListItemText primary={comment.comment_from.firstName + " " + comment.comment_from.lastName} secondary={comment.comment} />
                      </ListItem>
                    ))}
                  </List>

                  <center>
                    <TextField id="outlined-basic" variant="outlined" style={{
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
    const { toAccount, logout } = this.state
    if (toAccount === false && logout === false) {
      return (
        <div>
          <this.AppBar />
          <this.CardExampleGroups />
        </div>
      )

    } else if (toAccount === true) {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/account' render={() => <ProfileInfo user={this.state.user}></ProfileInfo>}></Route>
              <Redirect from='/userfeed' to='account'></Redirect>
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
              <Redirect from='/userfeed' to='login'></Redirect>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }
}
export default UserFeed;







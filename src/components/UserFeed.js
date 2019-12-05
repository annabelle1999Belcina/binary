import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppBarfile from './AppBarfile';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import AddPost from './AddPost';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';
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
}));


class UserFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,

      posts: [
        {
          user: [{ first_name: "Developers" }],
          title: "Spaghetti",
          description: "This is my first post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvZYf1rcr0NygtykZZiygTwzbRMbPdCiNJAg78EwZHYoJhqIoi",
          ingredients: "",
          comments: [{
            comment: '',
            comment_from: {
              first_name: '',
              last_name: ''
            }
          }]
        },
      ],
      readyToLoad: false,
    }
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

  CardExampleGroups = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        
        
        <Grid container spacing={3} style={{marginLeft:"20%", marginTop:"-20%"}}>
          {this.state.posts.map(post => (
            <Grid item xs={12} sm={4}>
              <Card style={{
                maxWidth: 400,
                backgroundColor: "pink",
                marginLeft: "10px",
                marginTop: "10px"
              }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" style={{ backgroundColor: red[500] }}>
                      Y
                                  </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={post.title}
                  subheader="September 14, 2016"
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
                </CardContent>
                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton> */}
                  <IconButton aria-label="share">
                    <ArrowDropDownIcon onClick={handleOpen} />
                  </IconButton>

                </CardActions>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div>
                      <Card style={{
                        maxWidth: 600,
                        backgroundColor: "pink",
                        marginLeft: "10px",
                        marginTop: "10px"
                      }}>
                        <CardHeader
                          avatar={
                            <Avatar aria-label="recipe" style={{ backgroundColor: red[500] }}>
                              Y
                                  </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="Shrimp and Chorizo Paella"
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          style={{
                            height: 0,
                            paddingTop: '56.25%',
                          }}
                          image={post.image}
                          title="Spaghetti"

                        />

                        <CardContent>
                          <Typography component="p">{post.description}</Typography>
                          <Typography component="p">{post.ingredients}</Typography>
                        </CardContent>
                        <CardActions>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                          </IconButton>

                        </CardActions>

                        <TextField id="outlined-basic" variant="outlined" style={{
                          width: 300,
                          border: "20px",
                          height: "60px",
                          marginLeft: "10px"
                        }} /> <Button variant="contained" color="primary" style={{
                          width: 100,
                          marginTop: "9px",
                          marginRight: "10px",
                          marginLeft:"5px"
                        }}>
                          Comment
        </Button>
                      </Card>
                    </div>
                  </Fade>
                </Modal>
              </Card>

            </Grid>
          ))}
        </Grid>
      



      </div>
    )
  }




  render() {
    return (
      <div>
        <div>
        <AppBarfile user={this.state.user} />
        <AddPost user={this.state.user}></AddPost>
        <ProfileInfo user={this.state.user}></ProfileInfo>
        </div>
        <this.CardExampleGroups />

      </div>
    )
  }
}
export default UserFeed;
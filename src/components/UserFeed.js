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
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppBar from './AppBarfile';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    this.state= {
      posts: [
        {
          user: [{ first_name: "Developers" }],
          title: "Love Lost",
          description: "This is my first post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvZYf1rcr0NygtykZZiygTwzbRMbPdCiNJAg78EwZHYoJhqIoi",
          body: "",
          comments: [{
            comment: '',
            comment_from: {
              first_name:'',
              last_name:''
            }
          }]
        },
      ],
      readyToLoad: false,
    }
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

    return(
  <div>
            
  <Container style={{ height: 400,
    marginTop:"70px",
      backgroundColor: "Black",
      marginBottom: "50px",}}>

  </Container>
  <Grid container spacing={3}>
  {this.state.posts.map(post => (
<Grid item xs={12} sm={4}>
  <Card style={{ maxWidth: 400,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: red[500]}}>
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
          style ={{ height: 0,
            paddingTop: '56.25%',
        }}
          image={post.image}
          title="Paella dish"
          
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton> */}
          <IconButton aria-label="share">
              <ArrowDropDownIcon onClick = {handleOpen}/>
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
          <Card style={{ maxWidth: 400,
      backgroundColor: "pink",
      marginLeft: "10px",
      marginTop: "10px" }}>
      <CardHeader
          avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: red[500]}}>
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
          style ={{ height: 0,
            paddingTop: '56.25%',
        }}
          image="photos/images.jpg"
          title="Paella dish"
          
      />

      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
              <ShareIcon />
          </IconButton>
          <IconButton aria-label="share">
          </IconButton>
         
      </CardActions>
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
            <AppBar/>
            </div>
              <this.CardExampleGroups/>
           
            </div>
        )
    }
}
export default UserFeed;
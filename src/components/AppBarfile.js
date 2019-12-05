import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { BrowserRouter as Link } from 'react-router-dom';
import UserFeed from './UserFeed';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
    
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    marginLeft:"90px"
  },
  side:{
      marginLeft: '90%'
  },
  h1:{
    textAlign:"center"
  }
}));

export default class AppBarfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        setOpen: false,
        open: false,
        toFeed:false,
        user: this.props.user,
        posts: [],
        logout: false
      };
  }

// HomeIcon = (props) => {
//     return (
//       <SvgIcon {...props}>
//         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//       </SvgIcon>
//     );
//   }

toUserFeedClick = (e) => {
  e.preventDefault();
  console.log("signUp")
  this.setState({ toFeed: true }, () => { console.log("signUp33", this.state.user) });


}
toUserFeed = () => {
  if (this.state.toSignUp) {
    console.log('Signup true');
    this.setState({ toFeed: true }, () => { this.props.history.push("/login"); })
    // return(
    //   <UserFeed user={this.state.user}></UserFeed>
    // )
  }
}
  

SearchAppBar = () => {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



 return(
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <Avatar alt="binary" src="../photos/logo.png"/>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide), classes.side}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Avatar alt="Ayane Consunji" src="/photos/sample.png" className={classes.bigAvatar} />
        <h1 className={classes.h1}>Ayane Consunji</h1>
        <Divider />
        <List>
        <ListItemIcon><MailIcon /><ListItem  button style={{ width: 200, height: 40 }} >Account</ListItem></ListItemIcon>
          <ListItemIcon><MailIcon /><ListItem onClick = {(e)=>this.toUserFeedClick(e)} button style={{ width: 200, height: 40 }} >Feed</ListItem></ListItemIcon>
          <ListItemIcon component={Link} to='/login'><MailIcon /><ListItem  button style={{ width: 200, height: 40 }} >Log Out</ListItem></ListItemIcon>
        </List>
      </Drawer>
    </div>
    )
      }
          render() {
            return (
              <div>
                {this.state.toFeed ? this.toUserFeed() : <this.SearchAppBar/>}
                  
                </div>
            )
        }
    }
               
import React, { Component } from 'react'
import '../App.css'
import { Button, Header } from 'semantic-ui-react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { BrowserRouter as Link} from 'react-router-dom';







class HeaderMain extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  HeaderExampleAttached = () => (
    <Header as='h2' attached='top'>
      <div className="header">
      <Menu style={{marginLeft:"90%"}}>
    <Dropdown text='User'  simple item>
      <Dropdown.Menu>
      <Link to={"/profile"}><Dropdown.Item><Button>User Profile</Button></Dropdown.Item></Link>
        <Dropdown.Item>Post</Dropdown.Item>
        
        <Dropdown.Item>User Feed</Dropdown.Item>
        <Dropdown.Divider />  
        <Dropdown.Item>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
      </div>
    </Header>

  )

  render() {

    return (
      <div >
        <this.HeaderExampleAttached />
      </div>

    )
  }
}
export default HeaderMain

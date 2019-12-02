import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import HeaderMain from './Header'
import SearchAppBar from './AppBar';


class UserFeed extends Component {

  CardExampleGroups = () => (
    <Card.Group style={{ marginLeft: '5%', marginRight: '3%' }}>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={require('../photos/images.jpg')}
          />
          <Card>Steve Sanders</Card>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
          </Button>
            <Button basic color='red'>
              Decline
          </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/molly.png'
          />
          <Card.Header>Molly Thomas</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
          </Button>
            <Button basic color='red'>
              Decline
          </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
          </Button>
            <Button basic color='red'>
              Decline
          </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
          </Button>
            <Button basic color='red'>
              Decline
          </Button>
          </div>
        </Card.Content>
      </Card>
      <br></br><br></br>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
          </Button>
            <Button basic color='red'>
              Decline
          </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
          </Button>
            <Button basic color='red'>
              Decline
          </Button>
          </div>
        </Card.Content>
      </Card>

    </Card.Group>
  )




  render() {
    return (
      <div>
        <div className = "feed">
          <SearchAppBar />
        </div>
        <this.CardExampleGroups />

      </div>
    )
  }
}
export default UserFeed;
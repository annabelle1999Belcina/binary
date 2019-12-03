import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class ArtistCard extends Component {

    
    render() {
        let date = new Date(this.props.birthDate)
        let month = parseInt(date.getMonth()) + 1
        const birthDateFormatted = date.getDate()+ '/' + month.toString() + '/' + date.getFullYear();
    

        return (
            <div className="artist_card" style={artistCard}>
                <div className="artists_name" style={artistName}>
                {this.props.firstName} <br/>
                {this.props.lastName}
                </div>

                <div className="nationality subtitle" 
                     style={nationality}> 
                    Nationality : {this.props.nationality}  
                </div>
                <div className="birth_date subtitle"
                     style={birthDate}> 
                    {birthDateFormatted}
                </div>
                <Button color="secondary"
                    style={deleteBtn}
                    onClick={this.props.deleteArtistById.bind(this, this.props.id)}>
                        Delete
                </Button>

                <Button color="primary"
                    style={updateBtn}
                    onClick={this.props.updateById.bind(this, this.props.id)}>
                        Update
                </Button>
            </div>
        )
    }
}

// PropTypes
ArtistCard.propTypes = {
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired
}

const artistCard = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: '150px',
    width: '300px',
    display: 'grid',
    padding: '10px 10px 0px 10px',
    gridRowGap: '8px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    alignItems: 'center',
    gridTemplateAreas: 
        '"artistName artistName"'+
        '"nationality birthDate "'+
        '"deleteBtn updateBtn "'
}

const artistName = {
    gridArea: 'artistName',
    fontSize: '20px',
    textAlign: 'center',
    color: '#3c3131'
}

const nationality = { 
    gridArea: "nationality",
    color: "#939393",
    fontWeight: "200",
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
}

const birthDate = {
    gridArea: "birthDate",
    justifySelf: "end",
    color: "#939393",
    fontWeight: "200",
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
}

const deleteBtn = { gridArea:  "deleteBtn"}
const updateBtn = { gridArea:  "updateBtn"}
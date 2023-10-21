// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamsData} = this.props
    const {name, imageUrl, id} = teamsData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img className="team-card-image" src={imageUrl} alt={`${name}`} />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard

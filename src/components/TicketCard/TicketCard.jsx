import React from 'react'
import {Link} from 'react-router-dom'
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay' 
import PriorityDisplay from '../PriorityDisplay/PriorityDisplay'
import StatusDisplay from "../StatusDisplay/StatusDisplay"
import ProgressDisplay from '../ProgressDisplay/ProgressDispaly'
import DeleteBlock from '../DeleteBlock/DeleteBlock'

const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-color" style={{ backgroundColor: color }}></div>
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={Number(ticket.priority)} />
        <ProgressDisplay progress={Number(ticket.progress)} />
      </Link>
      <DeleteBlock documentId={ticket.documentId} />
    </div>
  )
}

export default TicketCard
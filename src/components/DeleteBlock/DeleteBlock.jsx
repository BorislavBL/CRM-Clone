import React from 'react'
import axios from 'axios'

function DeleteBlock({documentId}) {
  const deleteTicket = async () =>{
    const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
    const syccess = response.status == 200
    if(syccess)window.location.reload()
  }

  return (
    <div className='delete-block'>
      <div className='delete-icon' onClick={deleteTicket}>
        ×
      </div>
    </div>
  )
}

export default DeleteBlock
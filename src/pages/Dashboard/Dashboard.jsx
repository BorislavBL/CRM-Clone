import React, {useEffect, useState, useContext} from 'react'
import TicketCard from '../../components/TicketCard/TicketCard'
import bbl from "../../assets/images/bbl.jpg"
import mtp from "../../assets/images/mtp.jfif"
import axios from 'axios'
import CategoriesContext from '../../Context/context'


function Dashboard() {

  // const tickets =[
  //   {
  //     category:"Q1 2022",
  //     color:'red',
  //     title:"NFT Safety 101 Video",
  //     owner:"Borislav L",
  //     avatar:bbl,
  //     status:'done',
  //     priority:5,
  //     progress:40,
  //     description:"Make a video showcasing how to work with NFTs. safety, including how to kwon if one is not genuine.",
  //     timestamp: "2022-02-11T07:36:17+0000",
  //   },
  //   {
  //     category:"Q1 2022",
  //     color:'red',
  //     title:"Build and sell AI model",
  //     owner:"Martin P",
  //     avatar:mtp,
  //     status:'working on it',
  //     priority:2,
  //     progress:70,
  //     description:"Make a video about AI.",
  //     timestamp: "2022-02-13T07:36:17+0000",
  //   },
  //   {
  //     category:"Q2 2022",
  //     color:'blue',
  //     title:"Build a bot",
  //     owner:"Kalata",
  //     avatar:mtp,
  //     status:'stuck',
  //     priority:3,
  //     progress:10,
  //     description:"Make a video about bot.",
  //     timestamp: "2022-02-15T07:36:17+0000",
  //   },
  // ]

  const [tickets, setTickets] = useState(null)
  const {categories, setCategories} = useContext(CategoriesContext)


const fetchData = async () =>{
    const response = await axios.get('http://localhost:8000/tickets')

    //wasn't sure how to get the Documet Id with the object.. open to better suggestions
    const dataObject = response.data.data

    const arrayOfKeys = Object.keys(dataObject)
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
    const formattedArray = []
    arrayOfKeys.forEach((key, index) => {
      const formmatedData = { ...arrayOfData[index] }
      formmatedData['documentId'] = key
      formattedArray.push(formmatedData)
    })

    setTickets(formattedArray)
}

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))])
  }, [tickets])

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,225,255)',
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({category})=>category))
  ]

  return (
    <div className='dashboard'>
        <h1>My Projects</h1>
        <div className='ticket-container'>
          {tickets && uniqueCategories?.map((x,i)=> (
            <div key={i}>
              <h3>{x}</h3>
              {tickets.filter(ticket=>ticket.category === x).
                map((y,z)=>(
                  <TicketCard
                    key={z}
                    id={z}
                    color={colors[i] || colors[0]}
                    ticket={y}
                  />
                ))
              }
            </div>
          ))}
        </div>
    </div>
  )
}

export default Dashboard


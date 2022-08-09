import React from 'react'
import { Paper, Button } from '@mui/material'

const Item = (slider) => {
  return (
    <>
        <Paper>
            <h2>{slider.name}</h2>
            <p>{slider.description}</p>
            <img src={slider.image}/>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    </>
  )
}

export default Item
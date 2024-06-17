import React, { useState } from 'react'
import Trips from '../components/Trips'
import Add from '../components/Add'
import { Container } from 'react-bootstrap'

function Landing() {
 
    //state for state lifting
    const [addUpdate,setAddUpdate]=useState(false)
   
    return (
    <div>
      <div>
       <Add update={setAddUpdate}></Add>  
<Container>
            <Trips updatedData={addUpdate}></Trips>
    
</Container>      

</div>
    </div>
  )
}

export default Landing

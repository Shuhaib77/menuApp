import React from 'react'
import Form from '../atom/Form'

function AddMenuItem({setOpen}) {
  return (
    <div>
        <Form heading={"ADD MENU ITEM"} setOpen={setOpen}/>
    </div>
  )
}

export default AddMenuItem
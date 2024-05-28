import React, { useState } from 'react'
import '../../sass/contacthero.scss'
import { Button } from '@mui/material'

function ContactHero() {
    const [name, setName] = useState('')
    const [tg, setTg] = useState('')
    const [phone, setPhone] = useState('')

  return (
    <>
    <div className='con'>
        <form action="" className='con__form'>
            <p>Contact</p>
            <input type="text" placeholder='Name' value={name} onChange={((e)=> setName(e.target.value))}/>
            <input type="text" placeholder='Telegram' value={tg} onChange={((e)=> setTg(e.target.value))}/>
            <input type="number" placeholder='Your number' value={phone} onChange={((e)=> setPhone(e.target.value))}/>
            <Button variant="contained" style={{width: 150, marginLeft: 130}}>Submit</Button>
        </form>
    </div>
    </>
  )
}

export default ContactHero
import React, { useState } from 'react'
import './ContactHero.css'
import { PatternFormat } from 'react-number-format'
import { Button } from '@mui/material'

function ContactHero() {
    const [name, setName] = useState('')
    const [tg, setTg] = useState('')
    const [phone, setPhone] = useState('')

  return (
    <>
    <div className='con'>
        <h3 style={{marginLeft: 180, fontSize: 30}}>Contact</h3>
        <form action="">
            <input type="text" placeholder='Name' value={name} onChange={((e)=> setName(e.target.value))}/>
            <input type="text" placeholder='Telegram' value={tg} onChange={((e)=> setTg(e.target.value))}/>
            <PatternFormat required value={phone} onChange={((e)=> setPhone(e.target.value))} className='mod_inp' format="+998 (##) ###-##-##" allowEmptyFormatting mask='_' valueIsNumericString={true} />
            <Button variant="contained" style={{width: 150, marginLeft: 470}}>Submit</Button>
        </form>
    </div>
    </>
  )
}

export default ContactHero
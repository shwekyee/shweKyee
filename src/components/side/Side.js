import React from 'react'
import './side.css'
import { ChatDotsFill, TelephoneFill } from 'react-bootstrap-icons'

const Side = () => {
  return (
    <div className='side_bar'>
        <a href='https://a3678.live4000.com/Chat/Chat?userID=&lang=en' className='bg-light text-dark'><ChatDotsFill></ChatDotsFill> Customer Support</a>
        <a href='https://t.me/nanchit000' className='side-viber'><TelephoneFill></TelephoneFill> Telegram</a>
    </div>
  )
}

export default Side
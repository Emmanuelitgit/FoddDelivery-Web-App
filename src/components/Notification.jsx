import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Alert } from '@mui/material';

const Notification = () => {
    const notification = useSelector((state)=>state.notification.message)
    const open = useSelector((state)=>state.notification.open);
    const[isOpen, setOpen] = useState(open)

  
    const handleClose = () =>{
        setOpen((prev)=>!prev)
    }
    console.log(isOpen)
  return (
    <div className='flex h-15'>
        {isOpen && <Alert security='success' className=''>{notification}</Alert>}
        {/* {isOpen && <MdClose color='red' className='mt-1 absolute ' onClick={handleClose}/>} */}
    </div>
  )
}

export default Notification
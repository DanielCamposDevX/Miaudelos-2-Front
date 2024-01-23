'use client'
import { IconButton } from '@mui/material';
import { Search, AccountCircle } from '@mui/icons-material';
import Image from 'next/image';
import Logo from '@/assets/Logo.png'
import UserOptions from './userOptions';


export default function Header() {



    function searchClick() {
        console.log("click")
    }




    return (
        <main className='shadow-md w-full h-14 flex justify-between items-center px-4 overflow-hidden'>
            <UserOptions />
            <IconButton disableFocusRipple disableTouchRipple disableRipple sx={{
                transform: 'scale(1)',
                transition: 'transform 0.5s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.2)',
                    transition: 'transform 0.5s ease-in-out',
                }
            }}>
                <Image src={Logo} width={100} height={100} alt="Logo" />
            </IconButton>
            <IconButton
                onClick={() => { searchClick() }} >
                <Search color='primary' sx={{ fontSize: '30px' }} />
            </IconButton>
        </main >
    )
}
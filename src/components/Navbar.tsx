import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';



function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }
    
  return (
    <nav className='flex item-center justify-between flex-wrap bg-orange-600 p-6'>
        <div className='flex item-center flex-shrink-0 text-white mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>Reasons I Can't Sleep</Link>
        </div>
        <div className="block">
            <button
                onClick={dropDown}
                className="flex items.center px-3 py-2 text-orange-800
                border rounded border-yellow-500 hover:text-white hover:border-white"
                >
                    <i className='fas fa-bars'></i>
            </button>
        </div>
        { isVisible ? (
        <div className='w-full block flex-grow items-center'>
            <div className="text-sm lg:flex-grow">
                <Button className='p-3 m-5 bg-yellow-500 justify-center rounded-xl'>
                    <div>
                        <Link to='/' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-orange-800 hover:text-white mr-4'>
                            Home
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-yellow-500 justify-center rounded-xl'>
                    <div>
                        <Link to='/about' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-orange-800 hover:text-white mr-4'>
                            About
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-yellow-500 justify-center rounded-xl'>
                    <div>
                        <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-orange-800 hover:text-white mr-4'>
                            Dashboard
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-yellow-500 justify-center rounded-xl'>
                    <div>
                        <Link to='/drink' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-orange-800 hover:text-white mr-4'>
                            Drinks
                        </Link>
                    </div>
                </Button>
                {
                    !auth.currentUser ?

                    <Button className='p-3 m-5 bg-yellow-500 justify-center rounded-xl'>
                        <div>
                            <Link to="/" onClick={ () => { signInOnClick() }} className="flex place-items-center mt-0
                            lg:inline-block lg:mt-0 text-orange-800 hover:text-white">
                                Sign In
                            </Link>
                        </div>
                    </Button>
                    :
                    
                    <Button className='p-3 m-5 bg-yellow-500 justify-center rounded-xl'>
                        <div>
                            <Link to="/" onClick={ () => { signOutOnClick() }} className="flex place-items-center mt-0
                            lg:inline-block lg:mt-0 text-orange-800 hover:text-white">
                                Sign Out
                            </Link>
                        </div>
                    </Button>
                }
            </div>
        </div>
        ) : (
        <></>
        )}
    </nav>
  )
}

export default Navbar
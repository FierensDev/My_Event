import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserAuth } from '../../context/AuthContext';

const Header = () => {

    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch(error){
            console.log(error);
        }
        
    }

    return (
        <div className='Header'>
            <div></div>
            <div> 
                <svg width="1em" height="1em" viewBox="0 0 8 8"><path fill="currentColor" d="M4 0C2.34 0 1 1.34 1 3c0 2 3 5 3 5s3-3 3-5c0-1.66-1.34-3-3-3zm0 1a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4z"></path></svg>
                <input type="text" 
                placeholder='Rechercher un evenement...'/>
            </div>
      
            <div className='Header_Link'>
                    <p></p>
                {user?.displayName ? (
                    <button onClick={handleSignOut}>Me deconnecter</button>
                ) : (
                    <Link to={`/SignIn`}>Me connecter</Link>
                )}
            </div>
            
        </div>
    );
};

export default Header;
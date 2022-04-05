import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='bg-slate-600 p-3 text-white'>
            <nav className='flex gap-4 justify-center'>
                <CustomLink to='/main'>Main</CustomLink>
                <CustomLink to='/volunteers'>Volunteers</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
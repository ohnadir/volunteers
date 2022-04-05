import React from 'react';

const Activities = ({ volunteer }) => {
    const { img, title } = volunteer;
    return (
        <div>
            <div className='mx-auto border md:w-[265px] p-2 sm:w-[200px] w-[270px]'>
                <img className='w-[250px]' src={(img) ? img : 'Undefined'} alt="" />
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Activities;
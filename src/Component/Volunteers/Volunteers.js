import React from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activities from '../Activities/Activities';

const Volunteers = () => {
    const [volunteers] = useVolunteers();
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 max-w-5xl mx-auto gap-8'>
                {
                    volunteers.map(volunteer => <Activities
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Activities>)
                }
            </div>
        </div>
    );
};

export default Volunteers;
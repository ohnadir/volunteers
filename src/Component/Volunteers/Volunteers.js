import React, { useEffect, useState } from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activities from '../Activities/Activities';

const Volunteers = () => {
    // const [volunteers] = useVolunteers();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => (d.title).toLowerCase().includes(searchText))
                setSearchResult(match);
            })
    }, [searchText]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);

       /*  const match = volunteers.filter(v => (v.title).toLowerCase().includes(searchText))
        setSearchResult(match); */
    }

    /* const handleSearchChange = (event) => {
        const searchText = event.target.value;
        const match = volunteers.filter(v => (v.title).toLowerCase().includes(searchText))
        setSearchResult(match);
    } */

    return (
        <div>
            <div className='my-5 mx-auto text-center '>
                <input onChange={handleSearchChange} className='text-center border rounded p-1' type="text " placeholder='Find your activity' / >
            </div>
            <h1 className='text-center my-5 text-xl'>Total Volunteers {searchResult.length}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 max-w-5xl mx-auto gap-8'>
                {
                    searchResult.map(volunteer => <Activities
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Activities>)
                }
            </div>
        </div>
    );
};

export default Volunteers;
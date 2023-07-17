import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => {
    return (
        <div className='text-center mt-64'>
            <h1 className=' text-4xl'>404 not found</h1>
            <p className='text-xl mt-3'>Back to <Link to={"/"} className="text-purple-600 font-semibold">Home Page</Link></p>
        </div>
    );
};

export default notFound;
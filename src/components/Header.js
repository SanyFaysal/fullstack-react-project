import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div className='mx-8 mt-8'>
            <h2 className='text-5xl font-bold'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matissse, & More</h2>
            <p className='text-gray-400 text-xl font-semibold '>Multi-Day Course <FontAwesomeIcon icon={faCircleQuestion} className="text-gray-400"></FontAwesomeIcon></p>
        </div>
    );
};

export default Header;
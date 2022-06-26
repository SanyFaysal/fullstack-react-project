import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
const Body = () => {
    const stars = () => {
        const startArray = []
        for (let index = 0; index < 5; index++) {
            const star = <FontAwesomeIcon icon={faStar} className='text-yellow-400'></FontAwesomeIcon>;
            startArray.push(star)
        }
        return startArray;

    }
    return (
        <div className='mt-12'>
            <div class="  ">
                <div class=" flex lg:flex-row-reverse justify-between  mx-10">
                    <div class="flex lg:w-[50%] justify-between">
                        <div class="">

                            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwgWAimeWhrCM4RaqchxM92E5E2jNxxNq4CQTPtZmCGFz_dVSR" class="w-[285px] h-[60vh] rounded-lg" alt='' />
                        </div>
                        <div className='grid gap-2 '>
                            <div class="">
                                <img src="https://media.newyorker.com/photos/59096e3b6552fa0be6830115/16:9/w_1280,c_limit/150622_r26654.jpg" class="w-[270px] h-[29vh] rounded mr-20" alt='' />
                            </div>
                            <div class="">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q4N2I6pknS42ajh1fCkzuNtbQDZcLv6PGg&usqp=CAU" class="w-[270px] rounded h-[30vh]" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] pr-20'>
                        <p class="text-xl font-semibold"> In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor, Students will have fun learning about the artists & creating their own art inspired by their work. </p>
                        <div className='flex items-center my-4'>
                            <div class="avatar placeholder">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>
                            <span className='text-xl text-primary font-bold ml-3'>Kimberly R Moseler</span>
                        </div>
                        <p> {stars()} <span className='text-sm text-gray-400 pl-1 font-semibold'>467 total reviews for this teachers</span></p>
                        <p className='my-2'> {stars()} <span className='text-sm text-gray-400 pl-1 font-semibold'>5 reviews for this class</span></p>
                        <div className='mt-8 flex items-center pr-16 justify-between'>
                            <div>
                                <button class="bg-primary py-2 text-white text-xl rounded-[30px] px-6">See Class Schedule <FontAwesomeIcon icon={faArrowRight} className="ml-2"></FontAwesomeIcon> </button>
                            </div>
                            <p className='text-primary text-xl font-bold'><FontAwesomeIcon icon={faHeart} className="text-primary text-xl"></FontAwesomeIcon> Save</p>
                            <p className='text-primary text-xl font-bold'><FontAwesomeIcon icon={faShare} className="text-primary text-xl"></FontAwesomeIcon> Share</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Body;
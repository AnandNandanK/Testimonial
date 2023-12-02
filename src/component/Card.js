import React from 'react';
import { RiDoubleQuotesR,RiDoubleQuotesL } from "react-icons/ri";
const Card = (props) => {
    let review=props.reviews;
    console.log("inside the Card component",review);
    console.log(review);
    return (
        <div className='flex flex-col md:relative '>
            <div className='absolute top-[-7rem] z-[10] mx-auto '> 
                <img src={review.image} className='aspect-square rounded-full w-[149px] h-[140px] z-25'></img>  
                <div className='absolute top-[-6px] bg-violet-500 aspect-square rounded-full w-[149px] h-[140px] z-[-1] left-[10px]'></div>
            </div>

            <div className='text-center top-7'>
                <p className='tracking-wider font-bold text-2xl capitalize '>{review.name}</p>
            </div>

            <div className='text-center top-7'>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5' >
                <RiDoubleQuotesL/>
            </div>

            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
            <RiDoubleQuotesR/>
            </div>

        </div>
    );
}

export default Card;

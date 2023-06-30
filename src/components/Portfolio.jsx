import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import ceuCatalog from '../assets/portfolio/CeuCatelog2fixed.png';
import goGame from '../assets/portfolio/Play-1024x647.png';
import publicPayment from '../assets/portfolio/paymentsearch-1024x798.png';


const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src: ceuCatalog,
            bt1Label: 'Live Public',
            bt2Label: 'none',
            bt1Link: 'https://ceucatalog.age.ohio.gov/',
            
        },{
            id:2,
            src: publicPayment
        },{
            id:3,
            src:  goGame,

        },{
            id:4,
            src: reactSmooth
        },{
            id:5,
            src: installNode
        },{
            id:6,
            src: reactWeather
        },
    ];

  return (
    <div name="portfolio"
    className=' bg-gradient-to-b from-black to-gray-800 w-full text-white ' >
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className=' py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid  grid-flow-row gap-8  md:grid-cols-2  '>

                {portfolios.map(({id,src}) => 
                    (
                        <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>   
                        <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center '>
                       {/*    {bt1Label &&  <button  className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{bt1Label}</button> } */}
                            <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Show me more</button>
                        </div>
                    </div>
  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
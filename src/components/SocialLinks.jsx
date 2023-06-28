import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const links=[
{
    id: 1,
    child: (
        <>
        LinkedIn<FaLinkedin size={30}/>
     </>
    ),
    href: 'https://linkedin.com',
    style: 'rounded-tr-md',
},
{
    id: 2,
    child: (
        <>
        GitHub<FaGithub size={30}/>
     </>
    ),
    href: 'https://github.com/stevelevesconte',
},
{
    id: 3,
    child: (
        <>
        Mail< HiOutlineMail size={30}/>
     </>
    ),
    href: 'mailto:foo@gmail.com',
   
},
{
    id: 4,
    child: (
        <>
        LinkedIn<BsFillPersonLinesFill size={30}/>
     </>
    ),
    href: '/resume.pdf',
    style: 'rounded-br-md',
    download: true,
},
];




const SocialLinks = () => {
  return (
    <div  className='hidden  min-[1142px]:flex flex-col top-[35%] left-0 fixed'>
        <ul>
           {
            links.map(({id,child,href,style,download}) => (
                <li key= {id} className={' ml-[-100px] flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:ml-[-10px] hover:rounded-md' + ' ' + style}>
                <a href={href} 
                className='flex justify-between items-center w-full text-white'
                download={download}
                target='_blank'
                rel="noreferrer">
                   {child}
                </a>
            </li> 
            )

            )
           }



        </ul>
    </div>
  )
}

export default SocialLinks
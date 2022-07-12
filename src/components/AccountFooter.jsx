import React from 'react'
import { Link } from 'react-router-dom'

const AccountFooter = () => {
  return (
    <div className=" text-white md:px-6 lg:px-8 xl:px-16 px-4 sm:py-20 py-12 res">
        <div className="pb-6 text[#757575]">
            <Link className='hover:underline hover:text-[#757575] text-[#757575] text-lg' to='/'>Questions? Contact us.</Link>
        </div>
      <div className="flex justify-between items-center lg:flex-row gap-5 flex-wrap">
   
     <div className=''>
     
        <ul className=''>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>FAQ</Link>
            </li>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Investor Relations</Link>
            </li>
            <li className='pb-2'>
                <Link className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Privacy</Link>
            </li>
            <li>
                <Link className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Speed Test</Link>
            </li>
            
        </ul>
        
        
     </div>
     <div>
     <ul className=''>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Help Center</Link>
            </li>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Jobs</Link>
            </li>
            <li className='pb-2'>
                <Link className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Cookie Preferences</Link>
            </li>
            <li>
                <Link className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Legal Notices</Link>
            </li>
            
        </ul>
     </div>
     <div>
     <ul className=''>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Account</Link>
            </li>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Ways to Watch</Link>
            </li>
            <li className='pb-2'>
                <Link className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Corporate Information</Link>
            </li>
            <li>
                <Link className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Only on Netflix</Link>
            </li>
            
        </ul>
     </div>
     <div>
     <ul className=''>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Media Center</Link>
            </li>
            <li className='pb-2'>
                <Link  className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Terms of Use</Link>
            </li>
            <li className='pb-2'>
                <Link className='hover:underline hover:text-[#757575] text-[#757575]' to='/'>Contact Us</Link>
            </li>
            
        </ul>
     </div>
      </div>
      
            <div className='pt-5 text-[#757575]'>Netflix Bangladesh</div>
    </div>
  )
}

export default AccountFooter;
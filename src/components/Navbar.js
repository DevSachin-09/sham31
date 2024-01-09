import React from 'react'
import Question from '../assets/Question'
import Menu from '../assets/Menu'
import Down from '../assets/Down'

export default function Navbar() {
    return (
        <div className='h-16 absolute left-60 w-[1284px] border-b border-border py-3 p-16 flex items-center gap-4 justify-between'>
            <div className='flex gap-4'>
                <p className='text-mirage text-xl leading-7 font-golona font-medium'>Payouts</p>
                <div className='flex items-center font-inter text-lightGray gap-[6px]'>
                    <Question color={"#4D4D4D"} />
                    <p className='text-xs font-golona'>How it works</p>
                </div>
            </div>
            <div className='relative'>
                <input type="text"
                    placeholder="&#xF002; Search features, tutorials, etc."
                    className='w-[400px] h-10 border rounded-md px-4 py-2 pr-4 bg-bgInput fontAwesome'
                />
                    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-10 bg-bgInput rounded-full p-2.5'>
                    <Menu />
                </div>
                <div className='w-10 h-10 bg-bgInput rounded-full p-2.5'>
                    <Down />
                </div>
            </div>
        </div>
    )
}
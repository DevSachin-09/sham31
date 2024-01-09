import React from 'react'
import Home from '../assets/Home'
import Orders from '../assets/Orders'
import Products from '../assets/Products'
import Appearance from '../assets/Appearance'
import Plugins from '../assets/Plugins'
import Discounts from '../assets/Discounts'
import Payouts from '../assets/Payouts'
import Marketing from '../assets/Marketing'
import Audience from '../assets/Audience'
import Delivery from '../assets/Delivery'
import ChevronDown from '../assets/ChevronDown'
import Analytics from '../assets/Analytics'
import Wallet from '../assets/Wallet'

export default function Sidebar() {
    return (
        <div className='border border-black bg-stratos h-screen w-60 py-4 px-3 relative'>
            <div className='mt-3 ml-3'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-white rounded'></div>
                        <div className='flex gap-1 flex-col justify-center'>
                            <p className='text-white font-inter text-[15px] leading-[22px] font-medium'>Nishyan</p>
                            <p className='text-white font-golona underline text-[13px] leading-4'>Visit Store</p>
                        </div>
                    </div>
                    <ChevronDown color={"#FFFFFF"} />
                </div>
                <div className='flex flex-col gap-1 mt-3'>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Home />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Home</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Orders />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Orders</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Products />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Products</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Delivery />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Delivery</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Marketing />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Marketing</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Analytics />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Analytics</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Payouts />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Payouts</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Discounts />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Discounts</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Audience />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Audience</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Appearance />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Appearance</p>
                    </div>
                    <div className='text-white flex items-center py-2 px-4 gap-3'>
                        <Plugins />
                        <p className='text-[14px] font-inter leading-5 font-medium'>Plugins</p>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-2 flex gap-3 items-center bg-brightGrey py-[6px] px-3 rounded'>
                <Wallet />
                <div className='flex flex-col gap-[2px]'>
                    <p className='text-white text-[13px] leading-4 font-inter'>Available credits</p>
                    <p className='text-white text-base font-inter font-medium'>222.10</p>
                </div>
            </div>
        </div>
    )
}
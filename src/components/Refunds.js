import React from 'react'
import { GoDotFill } from "react-icons/go"
import Download from '../assets/Download'
import Sort from '../assets/Sort'

export default function Refunds() {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex flex-col gap-6'>
        <p className='font-golona text-xl text-mirage font-medium'>Transactions | This Month</p>
        <div className='flex gap-3'>
          <p className='py-[6px] px-4 rounded-[40px] bg-mercury text-granite text-[14px] leading-5 font-inter'>Payouts (22)</p>
          <p className='py-[6px] px-4 rounded-[40px] bg-primaryBlue text-white text-[14px] leading-5'>Refunds (6)</p>
        </div>
      </div>
      <div className='bg-white pt-3 px-3 pb-2 rounded-lg'>
        <div className='flex justify-between items-center'>
          <input type="text"
            placeholder='&#xf002; Order ID or Transaction ID'
            className='fontAwesome px-4 py-2 border border-border rounded'
          />
          <div className='flex gap-3 items-center'>
            <div className='flex gap-[6px] border py-[6px] px-4 border-border items-center rounded'>
              <p className='text-lightGray font-inter'>Sort</p>
              <div className='rotate-90'>
                <Sort />
              </div>
            </div>
            <div className='p-2 border border-border rounded'>
              <Download />
            </div>
          </div>
        </div>
        <div className='flex justify-between py-[10px] px-3 mt-3 bg-porcelain'>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>Order ID</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>Status</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>Transaction ID</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>Refund date</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px] text-right'>Order amount</p>
        </div>
        <div className="flex justify-between py-[14px] px-3 border-b border-border">
          <p className='font-medium text-[14px] leading-5 font-golona text-primaryBlue w-[150px]'>#281209</p>
          <div className='flex gap-1 items-center w-[150px]'>
            <GoDotFill className='text-limeGreen' />
            <p className='text-[14px] leading-5 text-mirage font-inter'>Successful</p>
          </div>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>131634495747</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>Today, 08:45 PM</p>
          <p className='text-[14px] leading-5 font-golona text-mirage text-right w-[150px]'>&#8377;1,125.00</p>
        </div>
        <div className="flex justify-between py-[14px] px-3 border-b border-border">
          <p className='font-medium text-[14px] leading-5 font-golona text-primaryBlue w-[150px]'>#281208</p>
          <div className='flex gap-1 items-center w-[150px]'>
            <GoDotFill className='text-lemonGrass' />
            <p className='text-[14px] leading-5 text-mirage font-inter'>Processing</p>
          </div>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>131634495747</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>Yesterday, 3:00 PM</p>
          <p className='text-[14px] leading-5 font-golona text-mirage text-right w-[150px]'>&#8377;1,125.00</p>
        </div>
        <div className="flex justify-between py-[14px] px-3 border-b border-border">
          <p className='font-medium text-[14px] leading-5 font-golona text-primaryBlue w-[150px]'>#281207</p>
          <div className='flex gap-1 items-center w-[150px]'>
            <GoDotFill className='text-limeGreen' />
            <p className='text-[14px] leading-5 text-mirage font-inter'>Successful</p>
          </div>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>131634495747</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>12 Jul 2023, 3:00 PM</p>
          <p className='text-[14px] leading-5 font-golona text-mirage text-right w-[150px]'>&#8377;1,125.00</p>
        </div>
        <div className="flex justify-between py-[14px] px-3 border-b border-border">
          <p className='font-medium text-[14px] leading-5 font-golona text-primaryBlue w-[150px]'>#281206</p>
          <div className='flex gap-1 items-center w-[150px]'>
            <GoDotFill className='text-limeGreen' />
            <p className='text-[14px] leading-5 text-mirage font-inter'>Successful</p>
          </div>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>131634495747</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>12 Jul 2023, 3:00 PM</p>
          <p className='text-[14px] leading-5 font-golona text-mirage text-right w-[150px]'>&#8377;1,125.00</p>
        </div>
        <div className="flex justify-between py-[14px] px-3 border-b border-border">
          <p className='font-medium text-[14px] leading-5 font-golona text-primaryBlue w-[150px]'>#281205</p>
          <div className='flex gap-1 items-center w-[150px]'>
            <GoDotFill className='text-limeGreen' />
            <p className='text-[14px] leading-5 text-mirage font-inter'>Successful</p>
          </div>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>131634495747</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>12 Jul 2023, 3:00 PM</p>
          <p className='text-[14px] leading-5 font-golona text-mirage text-right w-[150px]'>&#8377;1,125.00</p>
        </div>
        <div className="flex justify-between py-[14px] px-3 border-b border-border">
          <p className='font-medium text-[14px] leading-5 font-golona text-primaryBlue w-[150px]'>#281204</p>
          <div className='flex gap-1 items-center w-[150px]'>
            <GoDotFill className='text-limeGreen' />
            <p className='text-[14px] leading-5 text-mirage font-inter'>Successful</p>
          </div>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>131634495747</p>
          <p className='text-[14px] leading-5 font-golona text-lightGray w-[150px]'>12 Jul 2023, 3:00 PM</p>
          <p className='text-[14px] leading-5 font-golona text-mirage text-right w-[150px]'>&#8377;1,125.00</p>
        </div>
      </div>
    </div>
  )
}

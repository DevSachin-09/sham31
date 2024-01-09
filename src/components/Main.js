import React from 'react'
import Refunds from './Refunds'
import ChevronDown from '../assets/ChevronDown'
import Question from '../assets/Question'
import ChevronRight from '../assets/ChevronRight'

export default function Main() {
    return (
        <div className='absolute left-60 top-16 pl-16 pr-[68px] py-8 bg-[#FAFAFA]'>
            <div className='flex justify-between'>
                <div className='text-xl font-golona text-mirage font-medium'>Overview</div>
                <div className='flex gap-4 h-9 w-32 border border-border items-center justify-center'>
                    <p className='font-golona text-lightGray'>This Month</p>
                    <ChevronDown color={"#4D4D4D"} />
                </div>
            </div>
            <div className='flex mt-4 gap-5'>
                <div className='flex flex-col bg-primaryBlue rounded'>
                    <div className='w-[370px] p-5 flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <p className='text-white font-inter'>Next Payouts</p>
                            <Question color={"#FFFFFF"} />
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-golona text-[32px] leading-[38px] text-white'>&#8377;2,312.23</p>
                            <div className='flex gap-1 items-center'>
                                <p className='font-golona underline text-white'>23 orders</p>
                                <ChevronRight color={"#FFFFFF"} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between bg-lightNavy rounded py-2 px-6'>
                        <p className='font-golona text-[14px] leading-[20px] text-bgInput'>Next payout date:</p>
                        <p className='font-golona text-[14px] leading-[20px] text-bgInput'>Today, 04:00PM</p>
                    </div>
                </div>
                <div className='w-[370px] flex flex-col gap-4 p-5 shadow-shadow h-fit bg-white'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-lightGray font-inter'>Amount Pending</p>
                        <Question color={"#4D4D4D"} />
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-mirage text-[32px] leading-[38px] font-golona'>&#8377;92,312.20</p>
                        <div className='flex gap-1 items-center'>
                            <p className='font-golona text-primaryBlue underline'>13 orders</p>
                            <ChevronRight color={"#146EB4"} />
                        </div>
                    </div>
                </div>
                <div className='w-[370px] flex flex-col gap-4 p-5 shadow-shadow h-fit bg-white'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-lightGray'>Amount Processed</p>
                        <Question color={"#4D4D4D"} />
                    </div>
                    <p className='text-mirage text-[32px] leading-[38px] font-golona'>&#8377;23,92,312.19</p>
                </div>
            </div>
            <Refunds />
        </div>
    )
}

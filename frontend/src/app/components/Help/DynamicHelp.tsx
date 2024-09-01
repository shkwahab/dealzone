"use client"
import React from 'react'
import { helpsidebar } from "@/app/data"
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from 'next/navigation';

interface Props {
    MainSection: React.JSXElementConstructor<any>
}
const DynamicHelp: React.FC<Props> = ({ MainSection }) => {
    const path = usePathname()
    const Sidebar = () => {
        return (
            <div className="w-1/4 flex flex-col space-y-4 ">
                {helpsidebar.map((item) => {
                    return <div key={item.id} className="  mb-10">
                        <h2 className='  text-lg sm:text-xl md:text-2xl'>
                            {item.name}
                        </h2>
                        <hr />
                        <ul className="flex space-y-2 my-4 flex-col">
                            {item.navigationTab.map((item) => {
                                return <Link className={`flex justify-between items-center ${item.link === path ? "bg-black font-semibold text-white rounded-md p-2" : ""}`} href={item.link} key={item.id}>
                                    {item.name}
                                    <MdKeyboardArrowRight className='text-lg sm:text-xl font-semibold' />
                                </Link>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        )

    }
    return (
        <React.Fragment>
            <div className="flex px-20 py-8  space-x-4 ">
                <Sidebar />
                <div className="w-3/4  bg-white rounded-md p-4">
                    <MainSection />
                </div>
            </div>
        </React.Fragment>
    )
}

export default DynamicHelp
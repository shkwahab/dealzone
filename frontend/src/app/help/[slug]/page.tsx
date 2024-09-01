"use client";
import DynamicHelp from '@/app/components/Help/DynamicHelp'
import React from 'react'

const page = () => {

    return (
        <React.Fragment>
            <DynamicHelp
                MainSection={() => {
                    return <React.Fragment>
                        
                    </React.Fragment>
                }}
            />
        </React.Fragment>
    )
}

export default page
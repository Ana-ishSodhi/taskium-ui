import React from 'react'
import Image from "next/image";
import Link from "next/link";

const WorkspaceLayout = ({ children } : { children : React.ReactNode }) => {

    return (
        <div className="h-full flex">
            {/* <AppSidebar /> */}
            <div className="flex-1 bg-orange-300">
                {children}
            </div>
        </div>
    );
};

export default WorkspaceLayout;
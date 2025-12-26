import React from 'react'
import Image from "next/image";
import Link from "next/link";
import AppSidebar from "./app-sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/components/ui/resizable"


const GlobalLayout = ({ children } : { children : React.ReactNode }) => {

    return (
        // <div className="h-full">
        //     <div className="flex h-[calc(100vh-48px)]">
        //         <AppSidebar />
        //         <div className="flex-1 bg-orange-300">
        //             {children}
        //         </div>
        //     </div>
        // </div>
        <div className="h-full flex">
            <AppSidebar />
            <div className="flex-1 bg-orange-300 p-4">
                {children}
            </div>
        </div>
    );
};

export default GlobalLayout;
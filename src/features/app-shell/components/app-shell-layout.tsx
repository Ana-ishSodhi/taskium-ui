import React from 'react'
import Toolbar from "./toolbar";
import Sidebar from "./Sidebar";


const MainLayout = ({ children } : { children : React.ReactNode }) => {

    return (
        <div className="h-full">
            <Toolbar />
            <div className="flex h-[calc(100vh-48px)]">
                <Sidebar />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
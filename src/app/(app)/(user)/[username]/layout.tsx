import GlobalLayout from "@/features/global/components/global-layout";

const Layout = ({ children } : { children : React.ReactNode }) => {

    return (
        <GlobalLayout>
            {children}
        </GlobalLayout>
    );
};

export default Layout;
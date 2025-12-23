import MainLayout from "@/features/app-shell/components/app-shell-layout";

const Layout = ({ children } : { children : React.ReactNode }) => {

    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
};

export default Layout;
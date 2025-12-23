import WorkspaceLayout from "@/features/workspace/components/workspace-layout";

const Layout = ({ children } : { children : React.ReactNode }) => {

    return (
        <WorkspaceLayout>
            {children}
        </WorkspaceLayout>
    );
};

export default Layout;
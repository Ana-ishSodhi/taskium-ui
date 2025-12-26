import React from 'react'

interface PageProps {
  params: Promise<{
    workspaceId: string;
  }>
};

const Page = async ({ params }: PageProps) => {

  const { workspaceId } = await params;

  return (
    <div>
      <p>Workspace Id: {workspaceId} </p>
    </div>
  );
};

export default Page;
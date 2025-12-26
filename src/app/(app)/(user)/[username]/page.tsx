import React from 'react'

interface PageProps {
  params: Promise<{
    username: string;
  }>
};

const Page = async ({ params }: PageProps) => {

  const { username } = await params;

  return (
    <div>
      <p>Global User Page for {username} </p>
    </div>
  );
};

export default Page;
"use client";

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  return (
    <div className="mt-auto md:flex border border-black rounded-md">
      <div className="relative">
        <Avatar className="">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="size-2 ring-2 ring-background rounded-full bg-green-500 absolute bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default UserAvatar;

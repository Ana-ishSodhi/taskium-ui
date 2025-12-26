"use client";
import React, { useState } from 'react'
import UserAvatar from "./UserAvatar";
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle, } from "@/components/ui/item"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { HouseIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateWorkspaceButton } from "./create-workspace";

const workspaces = [
  {
    id: "1",
    name: "Acme Inc",
    type: "Production",
    logo: "/logos/logo.svg",
  },
  {
    id: "2",
    name: "Sandbox",
    type: "Testing",
    logo: "/logos/logo.svg",
  },
]

const Sidebar = () => {
  const [activeWorkspaceId, setActiveWorkspaceId] = useState("1")

  return (
    <aside className="w-[70px] h-full bg-muted flex flex-col gap-y-2 items-center pt-4 pb-4">
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Item
              // onClick={() => setActiveWorkspaceId(workspace.id)}
              variant="outline"
              size="sm"    
              className="
                    flex h-12 w-12 cursor-pointer items-center justify-center
                    rounded-md border-border p-2
                    border-black
                    hover:bg-accent
                    data-[active=true]:bg-accent
                    focus-visible:ring-2 focus-visible:ring-ring
                  "
                >
                <ItemMedia className="shrink-0">
                  <Image src="/logos/logo.svg" alt="home" width={40} height={40} />
                </ItemMedia>
                </Item>
              </TooltipTrigger>

              <TooltipContent side="right" align="center" className="ml-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Home Workspace
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Personal
                  </span>
                </div>
              </TooltipContent>
            </Tooltip>
        {workspaces.map((workspace) => {
          const isActive = workspace.id === activeWorkspaceId

          return (
            <Tooltip key={workspace.id}>
              <TooltipTrigger asChild>
                <Item
                // onClick={() => setActiveWorkspaceId(workspace.id)}
                  variant="outline"
                  size="sm"
                  data-active={isActive}
                  className="
                    flex h-12 w-12 cursor-pointer items-center justify-center
                    rounded-md border-border p-2
                    border-black
                    hover:bg-accent
                    data-[active=true]:bg-accent
                    focus-visible:ring-2 focus-visible:ring-ring
                  "
                >
                <ItemMedia className="shrink-0">
                  <Image src="/logos/logo.svg" alt="logo" width={40} height={40} />
                </ItemMedia>
                </Item>
              </TooltipTrigger>

              <TooltipContent side="right" align="center" className="ml-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {workspace.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {workspace.type}
                  </span>
                </div>
              </TooltipContent>
            </Tooltip>
          )
        })}
        <CreateWorkspaceButton />
      </TooltipProvider>
      <UserAvatar />
    </aside>
  );
};

export default Sidebar;
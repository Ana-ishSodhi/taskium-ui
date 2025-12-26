import React from 'react'
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle, } from "@/components/ui/item"
import { Check, ChevronDownIcon, PlusIcon, SettingsIcon } from "lucide-react"

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

const ActiveWorkspace = () => {
  const activeWorkspaceId = "1"

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Item
            variant="outline"
            size="sm"
            className="flex items-center gap-3 rounded-md border-border px-3 py-2 border-black">
            <ItemMedia className="shrink-0">
              <Image src="/logos/logo.svg" alt="logo" width={40} height={40} />
            </ItemMedia>
            <ItemContent className="flex flex-col items-start text-left">
              <ItemTitle className="text-sm font-medium leading-none">
                Acme Inc
              </ItemTitle>
              <ItemDescription className="text-xs text-muted-foreground">
                Production
              </ItemDescription>
            </ItemContent>
            <ChevronDownIcon className="ml-auto h-4 w-4 text-muted-foreground" />
          </Item>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="sm:w-[280px] md:w-[320px] max-w-[320px] rounded-md p-1">
          <DropdownMenuLabel className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Switch workspace
          </DropdownMenuLabel>

          <ItemGroup>
            {workspaces.map((workspace, index) => (
              <React.Fragment key={workspace.id}>
                <DropdownMenuItem asChild>
                  <Item
                    variant="outline"
                    size="sm"
                    className="
                      flex items-center gap-3 rounded-md border-border px-3 py-2
                      hover:bg-accent
                      data-[active=true]:bg-accent
                      data-[active=true]:text-accent-foreground
                    "
                    data-active={workspace.id === activeWorkspaceId}
                  >
                    <ItemMedia className="shrink-0">
                      <Image
                        src={workspace.logo}
                        alt={workspace.name}
                        width={40}
                        height={40}
                      />
                    </ItemMedia>
                    <ItemContent className="flex flex-col items-start text-left">
                      <ItemTitle className="text-sm font-medium leading-none">
                        {workspace.name}
                      </ItemTitle>
                      <ItemDescription className="text-xs text-muted-foreground">
                        {workspace.type}
                      </ItemDescription>
                    </ItemContent>
                    {workspace.id === activeWorkspaceId && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </Item>
                </DropdownMenuItem>

                {index !== workspaces.length - 1 && <ItemSeparator />}
              </React.Fragment>
            ))}
          </ItemGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2">
            <SettingsIcon className="h-4 w-4" />
            Workspace settings
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 font-medium">
            <PlusIcon className="h-4 w-4" />
            Create New Workspace
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};


export default ActiveWorkspace;
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, } from "@/components/ui/sidebar"
import ActiveWorkspace from "./active-workspace"
import Link from "next/link";
import { HomeIcon, BellIcon, ClipboardIcon, CalendarIcon, FileTextIcon } from "lucide-react";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";

const username="test";
const currentFeature = "home"

const features = [
  { id: "home", name: "My Home", icon: HomeIcon, href: `/${username}` },
  { id: "inbox", name: "Inbox", icon: BellIcon, href: `/${username}/inbox` },
  { id: "tasks", name: "My Tasks", icon: ClipboardIcon, href: `/${username}/tasks` },
  { id: "calendar", name: "My Calendar", icon: CalendarIcon, href: `/${username}/calendar` },
  { id: "notes", name: "My Notes", icon: FileTextIcon, href: `/${username}/notes` },
]

const AppSidebar = () => {
  return (
    <aside className="w-[200px] h-full bg-red-200 flex flex-col gap-y-2 items-start pt-4 pb-4">
        <ActiveWorkspace />
        <Separator />
        <div className="flex flex-col w-full">
          {features.map((feature) => {
            const Icon = feature.icon
            const isActive = currentFeature === feature.id

            return (
              <Link key={feature.id} href={feature.href} className="w-full">
                <Item
                  variant="default"
                  size="sm"
                  className={`
                    flex items-center gap-2 w-full rounded-sm px-3 py-2
                    hover:bg-accent hover:text-accent-foreground
                    ${isActive ? "bg-accent text-accent-foreground" : ""}
                  `}
                >
                  <ItemMedia>
                    <Icon className="h-5 w-5" />
                  </ItemMedia>
                  <ItemContent>
                    <span className="text-sm font-medium">{feature.name}</span>
                  </ItemContent>
                </Item>
              </Link>
            )
          })}
        </div>
    </aside>
  );
};

// try to use the actual sidebar component from shadcn ui

export default AppSidebar;
"use client";

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TaskOverviewContent from "./task-overview-content";
import TaskListContent from "./task-list-content";
import TaskBoardContent from "./task-board-content";
import TaskCalendarContent from "./task-calendar-content";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const activeTrigger = "bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent data-[state=active]:shadow-none"

const TaskContent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
   <div className="flex flex-col h-full w-full bg-background">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full gap-4 border-b">
        <TabsList className="flex bg-background rounded-none p-0">
          <TabsTrigger value="overview" className={activeTrigger}>Overview</TabsTrigger>
          <TabsTrigger value="list" className={activeTrigger}>List</TabsTrigger>
          <TabsTrigger value="board" className={activeTrigger}>Board</TabsTrigger>
          <TabsTrigger value="calendar" className={activeTrigger}>Calendar</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex w-full items-center justify-between mt-2 border-b">
        <div className="flex items-center">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority Level</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button size="default">
          <PlusIcon />
          Add Task
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        {activeTab === "overview" && <TaskOverviewContent />}
        {activeTab === "list" && <TaskListContent />}
        {activeTab === "board" && <TaskBoardContent />}
        {activeTab === "calendar" && <TaskCalendarContent />}
      </div>

    </div>
  );
};

export default TaskContent;
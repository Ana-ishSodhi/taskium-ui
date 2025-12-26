"use client";
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge";

export const activityData = [
  {
    id: 1,
    type: "task",
    workspace: "Marketing Team",
    sender: "Alice Johnson",
    subject: "Prepare Q1 Report",
    preview: "Compile all campaign metrics and prepare Q1 report for review.",
    time: "1h ago",
    read: false,
    itemId: 101,
    link: "/workspace/marketing/tasks/101",
    status: "In Progress",
    priority: "high",
  },
  {
    id: 2,
    type: "project",
    workspace: "Website Redesign",
    sender: "Mia Torres",
    subject: "Client Feedback Received",
    preview: "The client has provided feedback on the homepage design.",
    time: "2h ago",
    read: true,
    itemId: 102,
    link: "/workspace/website-redesign/projects/102",
  },
  {
    id: 3,
    type: "meeting",
    workspace: "Sales Team",
    sender: "Rachel Adams",
    subject: "Weekly Sales Sync",
    preview: "Reminder: Weekly sales team meeting today at 3 PM.",
    time: "3h ago",
    read: false,
    itemId: 103,
    link: "/workspace/sales/meetings/103",
  },
  {
    id: 4,
    type: "file",
    workspace: "Finance Workspace",
    sender: "Ivy Chen",
    subject: "Budget Q4 Spreadsheet Uploaded",
    preview: "The updated Q4 budget spreadsheet has been uploaded.",
    time: "4h ago",
    read: true,
    itemId: 104,
    link: "/workspace/finance/files/104",
    attachments: [{ name: "Q4_Budget.xlsx", url: "/files/104/download" }],
  },
  {
    id: 5,
    type: "mention",
    workspace: "Dev Team",
    sender: "David Kim",
    subject: "Mentioned You in a Comment",
    preview: "David mentioned you in the file 'API Docs'.",
    time: "5h ago",
    read: false,
    itemId: 105,
    link: "/workspace/dev/files/105",
  },
  {
    id: 6,
    type: "message",
    workspace: "HR Workspace",
    sender: "Emily Smith",
    subject: "New Policy Update",
    preview: "Please review the updated remote work policy document.",
    time: "6h ago",
    read: true,
    itemId: 106,
    link: "/workspace/hr/messages/106",
  },
  {
    id: 7,
    type: "task",
    workspace: "Product Launch",
    sender: "Frank Liu",
    subject: "Finalize Launch Checklist",
    preview: "Ensure all items in the launch checklist are completed by EOD.",
    time: "7h ago",
    read: false,
    itemId: 107,
    link: "/workspace/product-launch/tasks/107",
    status: "Pending",
    priority: "medium",
  },
  {
    id: 8,
    type: "meeting",
    workspace: "Marketing Team",
    sender: "Leo Park",
    subject: "Social Media Strategy Review",
    preview: "Marketing strategy meeting tomorrow at 2 PM in the main conference room.",
    time: "8h ago",
    read: false,
    itemId: 108,
    link: "/workspace/marketing/meetings/108",
  },
  {
    id: 9,
    type: "project",
    workspace: "Mobile App",
    sender: "Henry Zhang",
    subject: "Beta Release Deployed",
    preview: "The beta version of the mobile app is now deployed for internal testing.",
    time: "9h ago",
    read: false,
    itemId: 109,
    link: "/workspace/mobile-app/projects/109",
  },
  {
    id: 10,
    type: "file",
    workspace: "Design Project",
    sender: "Olivia Davis",
    subject: "Homepage Wireframes Uploaded",
    preview: "Latest homepage wireframes have been uploaded for review.",
    time: "10h ago",
    read: true,
    itemId: 110,
    link: "/workspace/design/files/110",
    attachments: [{ name: "homepage_v2.fig", url: "/files/110/download" }],
  },
  {
    id: 11,
    type: "task",
    workspace: "Content Team",
    sender: "Tina Nguyen",
    subject: "Write Blog Post Draft",
    preview: "Draft the upcoming blog post about productivity tools.",
    time: "11h ago",
    read: false,
    itemId: 111,
    link: "/workspace/content/tasks/111",
    status: "In Progress",
    priority: "high",
  },
  {
    id: 12,
    type: "mention",
    workspace: "Finance Workspace",
    sender: "Quinn Lee",
    subject: "Mentioned You in Budget Doc",
    preview: "Quinn mentioned you in 'Q3 Expense Sheet' for clarification.",
    time: "12h ago",
    read: true,
    itemId: 112,
    link: "/workspace/finance/files/112",
  },
  {
    id: 13,
    type: "message",
    workspace: "HR Workspace",
    sender: "Nathan Scott",
    subject: "Team Event Next Week",
    preview: "Reminder: Company team-building event scheduled for next Thursday.",
    time: "13h ago",
    read: false,
    itemId: 113,
    link: "/workspace/hr/messages/113",
  },
  {
    id: 14,
    type: "project",
    workspace: "Website Redesign",
    sender: "Carla Gomez",
    subject: "Project Milestone Reached",
    preview: "Milestone 2: Landing Page overhaul has been completed. Congrats!",
    time: "14h ago",
    read: true,
    itemId: 114,
    link: "/workspace/website-redesign/projects/114",
  },
  {
    id: 15,
    type: "meeting",
    workspace: "Sales Team",
    sender: "Grace Tan",
    subject: "Client Call Reminder",
    preview: "Reminder: Call with ACME Corp. scheduled for 11 AM today.",
    time: "15h ago",
    read: false,
    itemId: 115,
    link: "/workspace/sales/meetings/115",
  },
  {
    id: 16,
    type: "task",
    workspace: "Product Launch",
    sender: "Paul Martin",
    subject: "QA Testing Checklist",
    preview: "Complete QA testing for the new product features before release.",
    time: "16h ago",
    read: false,
    itemId: 116,
    link: "/workspace/product-launch/tasks/116",
    status: "Pending",
    priority: "medium",
  },
  {
    id: 17,
    type: "file",
    workspace: "Dev Team",
    sender: "Olivia Davis",
    subject: "API Documentation Uploaded",
    preview: "New API documentation for the payment gateway is available for review.",
    time: "17h ago",
    read: true,
    itemId: 117,
    link: "/workspace/dev/files/117",
    attachments: [{ name: "API_Gateway.pdf", url: "/files/117/download" }],
  },
  {
    id: 18,
    type: "mention",
    workspace: "Content Team",
    sender: "Jack Wilson",
    subject: "Mentioned You in Doc",
    preview: "Jack mentioned you in 'Blog Post Draft 3' for feedback on the intro section.",
    time: "18h ago",
    read: false,
    itemId: 118,
    link: "/workspace/content/files/118",
  },
  {
    id: 19,
    type: "message",
    workspace: "HR Workspace",
    sender: "Emily Smith",
    subject: "Reminder: Policy Review",
    preview: "Please review the updated remote work policy document.",
    time: "19h ago",
    read: true,
    itemId: 119,
    link: "/workspace/hr/messages/119",
  },
  {
    id: 20,
    type: "task",
    workspace: "Design Project",
    sender: "Bob Lee",
    subject: "Update Homepage Wireframes",
    preview: "Please update the homepage wireframes based on the latest feedback.",
    time: "20h ago",
    read: false,
    itemId: 120,
    link: "/workspace/design/tasks/120",
    status: "In Progress",
    priority: "high",
  },
];


// Type color mapping for badges
const typeColors: Record<string, string> = {
  task: "bg-green-500",
  project: "bg-purple-500",
  meeting: "bg-blue-500",
  file: "bg-indigo-500",
  mention: "bg-yellow-400",
  message: "bg-gray-400",
};
type ActivityType = keyof typeof typeColors


const Page = () => {
  const [selectedItem, setSelectedItem] = React.useState(activityData[0]);

  return (
    <div className="flex h-full">
      {/* Left: Scrollable activity feed */}
      {/* Filters Star and Add New Item - Task or Meeting from Inbox */}
      <ScrollArea className="w-80 border-r border-gray-200">
        <div className="flex flex-col">
          {activityData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`p-4 flex items-start cursor-pointer hover:bg-gray-50 ${
                !item.read ? "bg-gray-100 font-medium" : ""
              }`}
            >

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold">{item.subject}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
                <p className="text-xs text-gray-500">{item.preview}</p>
                <p className="text-xs text-gray-400">
                  {item.sender} • {item.workspace}
                </p>
                <Badge className={`rounded-sm ${typeColors[item.type as ActivityType]}`}>
                  {item.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Right: Detail panel */}
      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {selectedItem ? (
          <div>
            <div className="border-b">
              <h2 className="text-xl font-bold mb-2">{selectedItem.subject}</h2>
              <p className="text-sm text-gray-500 mb-4">
                From: {selectedItem.sender} • {selectedItem.time} •{" "}
                {selectedItem.workspace}
              </p>
            </div>
            <div className="text-gray-700">
              <p>{selectedItem.preview}</p>
              {selectedItem.status && (
                <p className="mt-2 text-sm text-gray-600">
                  Status: {selectedItem.status}
                </p>
              )}
              {selectedItem.priority && (
                <p className="mt-1 text-sm text-gray-600">
                  Priority: {selectedItem.priority}
                </p>
              )}
              {selectedItem.type && (
                <p className="mt-1 text-sm text-gray-600">
                  Type: {selectedItem.type}
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select an item to view details.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
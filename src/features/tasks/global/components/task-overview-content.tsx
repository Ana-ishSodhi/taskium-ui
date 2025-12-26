import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import React from 'react'

const TaskOverviewContent = () => {
  return (
  <div>
    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4">
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
      <Card>Item 4</Card>
      <Card>Item 5</Card>
    </div>
    <div>
      Charts
    </div>
    <div>
      Table + view all take to list
    </div>
  </div>

  )
}

export default TaskOverviewContent;
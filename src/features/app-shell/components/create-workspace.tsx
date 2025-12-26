import { useState } from "react"
import { PlusIcon } from "lucide-react"
import { Item, ItemMedia } from "@/components/ui/item"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export const CreateWorkspaceButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Item
              variant="outline"
              size="sm"
              className="
                flex h-12 w-12 cursor-pointer items-center justify-center
                rounded-md border-border p-2
                border-black
                hover:bg-accent
                focus-visible:ring-2 focus-visible:ring-ring
              "
            >
              <ItemMedia>
                <PlusIcon className="h-6 w-6" />
              </ItemMedia>
            </Item>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent side="right" align="center" className="ml-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium">Create new workspace</span>
          </div>
        </TooltipContent>
      </Tooltip>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Quickly add a new task to stay organized.
          </DialogDescription>
        </DialogHeader>

        <form>
          <div className="grid gap-4 py-4">
            <div className="grid gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>

        <DialogFooter>
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </DialogFooter>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};

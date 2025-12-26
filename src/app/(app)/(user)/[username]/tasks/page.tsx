import TaskHeader from "@/features/tasks/global/components/task-header";
import TaskContent from "@/features/tasks/global/components/task-content";

const Page = () => {
  
  return (
    <div className="flex flex-col h-full overflow-auto">
      <TaskHeader />
      {/* <div className="bg-white border-b h-full"> */}
        <TaskContent />
      {/* </div> */}
    </div>
  );
};

export default Page;
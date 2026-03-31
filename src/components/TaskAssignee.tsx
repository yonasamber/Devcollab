export default function TaskAssignee({ assignee }: any) {
  if (!assignee) return null;

  return (
    <div className="flex items-center gap-1">
      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
        {assignee.name?.charAt(0)}
      </div>
    </div>
  );
}

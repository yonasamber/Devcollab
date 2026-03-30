export default function ProjectStats({ tasks }: any) {
  const total = tasks?.length || 0;

  const done = tasks?.filter((t: any) => t.status === "done").length || 0;

  const doing = tasks?.filter((t: any) => t.status === "doing").length || 0;

  return (
    <div className="flex gap-4 mb-4">
      <div className="bg-white p-3 rounded shadow">Total: {total}</div>
      <div className="bg-white p-3 rounded shadow">Doing: {doing}</div>
      <div className="bg-white p-3 rounded shadow">Done: {done}</div>
    </div>
  );
}

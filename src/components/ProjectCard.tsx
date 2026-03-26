import { Project } from "@/types";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project._id}`}>
      <div className="border p-4 roundedd shadow hover:bg-gray-50">
        <h2 className="font-bold  text-lg">{project.title}</h2>
        <p className="text-sm">{project.description}</p>
      </div>
    </Link>
  );
}

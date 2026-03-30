"use client";

import CreateProject from "@/components/CreateProject";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/hooks/useProjects";

export default function Dashboard() {
  const { data: projects, refetch } = useProjects();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <CreateProject onSuccess={refetch} />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        mt-4
      >
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

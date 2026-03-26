export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface Project {
  _id: string;
  title: string;
  description?: string;
  owner: string;
  members: string[];
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  projectId: string;
  assignedTo?: string;
  status: "todo" | "doing" | "done";
  priority: "low" | "medium" | "high";
  dueDate?: string;
}

export interface Comment {
  _id: string;
  taskId: string;
  userId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  message: string;
}

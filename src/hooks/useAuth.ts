import api from "@/lib/axios";
import { AuthResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const useRegister = () => {
  return useMutation<AuthResponse, any, RegisterInput>((data: RegisterInput) =>
    api.post("/auth/register", data).then((res) => res.data),
  );
};

export const useLogin = () => {
  return useMutation<AuthResponse, any, LoginInput>((data: LoginInput) =>
    api.post("/auth/login", data).then((res) => res.data),
  );
};

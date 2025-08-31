import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(5, "Minimo 5 caracteres"),
    email: z.email("Email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirmação de senha é obrigatória"),
});
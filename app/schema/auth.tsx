import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({message:"Email required"}),
    password: z.string().min(6,{message:"Password must be atleast 6 characters"}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter and one number' }),
});
export const registerSchema = z.object({
    email: z.string().email({ message: "Email required" }),
    name: z.string().min(2, { message: "Name required" }),
    password: z.string().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter and one number' }),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export const forgotPasswordSchema = z.object({
    email: z.string().email(),
});
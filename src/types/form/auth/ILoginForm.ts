import { InferType } from "yup";
import { loginSchema } from "@/schema";

type ILoginForm = InferType<typeof loginSchema>;

export type { ILoginForm };

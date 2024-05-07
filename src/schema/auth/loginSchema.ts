import { object, string } from "yup";

const loginSchema = object({
  username: string().label("Username").required(),
  password: string().min(4).max(26).label("Password").required(),
});

export { loginSchema };

// validationSchema.js
import { z } from 'zod';

const emailSchema = z.string().email({ message: "Invalid email address for ex. xyz@gmail.com" });

const passwordSchema = z.string()
    .min(8, { message: "Password must be at least 8 characters long including letters digits & special character" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" });

const userSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export { userSchema };

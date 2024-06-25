const {z} = require("zod");

// create a object schema

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least 3 chars."})
    .max(255,{message:"Email must not be more than 255 characters"}),
    
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must be at least 6 chars."})
    .max(255,{message:"Password must not be more than 255 characters"}),

});

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 chars."})
    .max(255,{message:"Name must not be more than 255 characters"}),
    
});

module.exports = {signupSchema,loginSchema};
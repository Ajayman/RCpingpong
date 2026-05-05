import z from "zod"

const contactMessageSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().optional(),
    phoneNumber: z.string().min(6, "Enter Valid Phone Number")
})

type contactMessageState = {
    values?: z.infer<typeof contactMessageSchema>
    errors?: null | Partial<Record<keyof z.infer<typeof contactMessageSchema>, string[]>>
    success: boolean,
    submittedAt: null | number
}

export { contactMessageSchema, type contactMessageState }
"use server"

import { prisma } from "@/lib/prisma"
import { contactMessageSchema, type contactMessageState } from "../schema"

export async function submitContactMessage(_prevState: contactMessageState, formData: FormData) {
    const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        phoneNumber: formData.get("phoneNumber")
    }
    const result = contactMessageSchema.safeParse(values)
    if (!result.success) {
        return {
            values,
            success: false,
            errors: result.error.flatten().fieldErrors,
            submittedAt: null
        } as contactMessageState
    }
    try {
        const res = await prisma.contactMessage.create({
            data: {
                name: result.data.name,
                email: result.data.email,
                message: result.data.message || "",
                phoneNumber: result.data.phoneNumber
            }
        })
        if (res) {
            return {
                values,
                success: true,
                errors: null,
                submittedAt: Date.now()
            } as contactMessageState
        }
        return {
            values,
            success: false,
            errors: { general: ["Failed to save message. Please try again later."] },
            submittedAt: null
        } as contactMessageState
    } catch (error) {
        return {
            values,
            success: false,
            errors: { general: ["Failed to save message. Please try again later."] },
            submittedAt: null
        } as contactMessageState
    }
}
"use server";

import { z } from "zod";
import { researchTopicBrainstorm, type ResearchTopicBrainstormOutput } from "@/ai/flows/research-topic-brainstorm";
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  whatsapp: z.string(),
  subject: z.string(),
  helpType: z.string(),
  requirements: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
        return { success: false, message: "Invalid form data." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = "karnkumar5522@gmail.com";

    try {
        const { data, error } = await resend.emails.send({
            from: 'Thesis Writer <onboarding@resend.dev>',
            to: [toEmail],
            subject: `New Requirement: ${parsed.data.helpType} - ${parsed.data.subject}`,
            html: `
              <h1>New Requirement Submission</h1>
              <p><strong>Name:</strong> ${parsed.data.name}</p>
              <p><strong>Email:</strong> ${parsed.data.email}</p>
              <p><strong>WhatsApp:</strong> ${parsed.data.whatsapp}</p>
              <p><strong>Service:</strong> ${parsed.data.helpType}</p>
              <p><strong>Subject:</strong> ${parsed.data.subject}</p>
              <p><strong>Requirements:</strong></p>
              <p>${parsed.data.requirements}</p>
            `
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, message: "Failed to send email. Please try again later." };
        }

        console.log("Email sent successfully:", data);
        return { success: true };

    } catch(e) {
        console.error("Error sending email", e);
        return { success: false, message: "An unexpected error occurred while sending the email." };
    }
}


const brainstormSchema = z.object({
  subjectArea: z.string(),
});

export async function runAiBrainstorm(values: z.infer<typeof brainstormSchema>): Promise<ResearchTopicBrainstormOutput | null> {
    const parsed = brainstormSchema.safeParse(values);

    if (!parsed.success) {
        console.error("Invalid input for AI brainstorm:", parsed.error);
        return null;
    }

    try {
        const result = await researchTopicBrainstorm(parsed.data);
        return result;
    } catch(error) {
        console.error("Error running researchTopicBrainstorm flow:", error);
        return null;
    }
}


import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { CompanyEmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // Parse the form data from the request
        const body = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Delightech <onboarding@resend.dev>', // Changed from 'Acme'
            to: ['vathanak110@gmail.com'], // Your actual email
            subject: `New Contact: ${body.subject || 'Website Inquiry'}`, // Dynamic subject
            react: CompanyEmailTemplate({
                recipientName: body.name
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
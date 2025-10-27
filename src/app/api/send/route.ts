
import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { CompanyEmailTemplate } from '@/components/email-template';
import NotificationTemplate from '@/components/notification-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // Parse the form data from the request
        const body = await request.json();

        const [customerEmail, adminEmail] = await Promise.allSettled([
            // 1. Confirmation email to customer
            resend.emails.send({
                from: 'Delightech <onboarding@resend.dev>',
                to: body.email,
                subject: 'Thank you for contacting Delightech',
                react: CompanyEmailTemplate({
                    recipientName: body.name,
                    recipientEmail: body.email,
                    subject: body.subject,
                    message: body.message,
                }),
            }),

            // 2. Notification email to you (admin)
            resend.emails.send({
                from: 'Delightech Contact Form <onboarding@resend.dev>',
                to: 'vathanak110@gmail.com', // Your email
                replyTo: body.email, // So you can reply directly to the customer
                subject: `🔔 New Contact: ${body.subject || 'Website Inquiry'}`,
                react: NotificationTemplate({
                    recipientName: body.name,
                    recipientEmail: body.email,
                    subject: body.subject,
                    message: body.message,
                }),
            }),
        ]);

        // Check if both emails succeeded
        const customerSuccess = customerEmail.status === 'fulfilled';
        const adminSuccess = adminEmail.status === 'fulfilled';

        if (!customerSuccess && !adminSuccess) {
            // Both failed
            return Response.json(
                {
                    error: 'Failed to send emails',
                    details: {
                        customer: customerEmail.status === 'rejected' ? customerEmail.reason : null,
                        admin: adminEmail.status === 'rejected' ? adminEmail.reason : null,
                    }
                },
                { status: 500 }
            );
        }

        // Return success even if one email succeeded
        return Response.json({
            success: true,
            customerEmailSent: customerSuccess,
            adminEmailSent: adminSuccess,
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
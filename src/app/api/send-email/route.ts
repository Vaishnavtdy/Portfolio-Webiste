import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's test email
            to: ['vaishnavtdy@gmail.com'],
            replyTo: email,
            subject: `New Portfolio Enquiry from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 30px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .content {
                            background: #f9fafb;
                            padding: 30px;
                            border-radius: 0 0 10px 10px;
                        }
                        .field {
                            margin-bottom: 20px;
                        }
                        .label {
                            font-weight: 600;
                            color: #667eea;
                            margin-bottom: 5px;
                        }
                        .value {
                            background: white;
                            padding: 15px;
                            border-radius: 5px;
                            border-left: 3px solid #667eea;
                        }
                        .message-box {
                            background: white;
                            padding: 20px;
                            border-radius: 5px;
                            border-left: 3px solid #667eea;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            color: #6b7280;
                            font-size: 14px;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1 style="margin: 0;">📧 New Portfolio Enquiry</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">From:</div>
                            <div class="value">${name}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email:</div>
                            <div class="value">
                                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                            </div>
                        </div>
                        <div class="field">
                            <div class="label">Message:</div>
                            <div class="message-box">${message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This email was sent from your portfolio contact form</p>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}

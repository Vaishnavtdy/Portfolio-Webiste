# Email Setup Instructions

This guide will help you set up the email functionality for your portfolio contact form.

## Prerequisites

- A free Resend account
- Access to your portfolio project

## Step-by-Step Setup

### 1. Create a Resend Account

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up for a free account (no credit card required)
3. Verify your email address

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (it starts with `re_`)

### 3. Configure Your Environment

1. In your project root directory, create a file named `.env.local`
2. Add your API key to the file:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

3. Save the file

### 4. Restart Your Development Server

Since you're already running `npm run dev`, you need to restart it to load the new environment variables:

1. Stop the current server (Ctrl+C in the terminal)
2. Start it again:

```bash
npm run dev
```

### 5. Test the Contact Form

1. Open your portfolio in the browser (usually http://localhost:3000)
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email at vaishnavtdy@gmail.com

## Important Notes

### Free Tier Limits

- **100 emails per day**
- **3,000 emails per month**
- This is more than enough for a portfolio contact form

### Default Sender Email

Currently, the emails are sent from `onboarding@resend.dev` (Resend's test email). This is fine for testing, but for production you should:

1. **Add your own domain** to Resend (optional but recommended)
2. **Verify your domain** in the Resend dashboard
3. **Update the API route** to use your domain email

To update the sender email, edit `/src/app/api/send-email/route.ts` and change:

```typescript
from: 'Portfolio Contact <onboarding@resend.dev>',
```

to:

```typescript
from: 'Your Name <noreply@yourdomain.com>',
```

### Email Template

The emails are sent with a beautiful HTML template that includes:
- Professional gradient header
- Formatted contact information
- The sender's message
- Reply-to functionality (replies go directly to the sender's email)

### Troubleshooting

**Error: "Failed to send email"**
- Check that your API key is correct in `.env.local`
- Ensure you've restarted the development server
- Check the browser console for detailed error messages

**Not receiving emails?**
- Check your spam folder
- Verify the API key is active in Resend dashboard
- Check Resend dashboard logs for delivery status

**Rate limiting**
- If you exceed the free tier limits, emails will fail
- Monitor your usage in the Resend dashboard

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - your API key won't be committed
- ✅ The API route validates all input data
- ✅ Email addresses are validated before sending
- ✅ Error messages don't expose sensitive information

## Next Steps

Once everything is working:

1. Test with different email addresses
2. Try submitting invalid data to test validation
3. Consider adding a domain to Resend for production use
4. Monitor your email usage in the Resend dashboard

---

**Need Help?**
- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference/emails/send-email)

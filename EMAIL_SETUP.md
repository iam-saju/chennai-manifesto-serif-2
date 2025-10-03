# Email Notification Setup

## Current Implementation

The signup form now sends email notifications to `iamsajuabbau@gmail.com` when users sign up. Here are the setup options:

## Option 1: Zapier Webhook (Recommended)

1. Go to [Zapier.com](https://zapier.com) and create a free account
2. Create a new Zap with:
   - **Trigger**: Webhooks by Zapier > Catch Hook
   - **Action**: Email by Zapier > Send Email
3. Configure the email action:
   - **To**: iamsajuabbau@gmail.com
   - **Subject**: New Manifesto Signup
   - **Body**: New user signup: {{email}} at {{timestamp}}
4. Copy the webhook URL and set it as `REACT_APP_WEBHOOK_URL` in your environment

## Option 2: IFTTT Webhook

1. Go to [IFTTT.com](https://ifttt.com) and create an account
2. Create a new Applet with:
   - **If This**: Webhooks > Receive a web request
   - **Then That**: Email > Send me an email
3. Configure the email with the webhook data
4. Use the webhook URL in your environment

## Option 3: Custom Backend Endpoint

Create a simple backend endpoint that sends emails using:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer with Gmail SMTP

## Option 4: EmailJS (Client-side)

1. Go to [EmailJS.com](https://emailjs.com) and create an account
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your service ID, template ID, and user ID
5. Set environment variables:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

## Current Fallback

If no webhook URL is configured, the system will:
1. Log the signup details to the console
2. Show a success message to the user
3. Continue working normally

## Testing

1. Start the development server: `npm run dev`
2. Navigate to the manifesto page
3. Scroll to the bottom to see the footer
4. Enter an email and click "Notify Me"
5. Check the console for the email notification details
6. Check your email for the notification (if webhook is configured)

## Production Deployment

Make sure to set the `REACT_APP_WEBHOOK_URL` environment variable in your production environment (Vercel, Netlify, etc.).

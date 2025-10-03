interface EmailData {
  email: string;
  timestamp: string;
  userAgent: string;
}

export const sendEmailNotification = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const emailData: EmailData = {
      email,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    // For now, we'll use a simple approach with a public service
    // In production, you'd want to use a proper email service like SendGrid, Mailgun, or AWS SES
    
    // Using EmailJS as a simple solution (free tier available)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'YOUR_SERVICE_ID', // You'll need to set this up
        template_id: 'YOUR_TEMPLATE_ID', // You'll need to set this up
        user_id: 'YOUR_USER_ID', // You'll need to set this up
        template_params: {
          to_email: 'iamsajuabbau@gmail.com',
          from_email: email,
          message: `New user signup: ${email} at ${emailData.timestamp}`,
          subject: 'New Manifesto Signup'
        }
      })
    });

    if (response.ok) {
      return { success: true, message: 'Email sent successfully' };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send notification email' };
  }
};

// Alternative: Simple webhook approach using a service like Zapier or IFTTT
export const sendWebhookNotification = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const webhookUrl = 'YOUR_WEBHOOK_URL'; // Replace with your webhook URL
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: 'Chennai Manifesto',
        message: `New user ${email} has signed up for the manifesto waitlist`
      })
    });

    if (response.ok) {
      return { success: true, message: 'Notification sent successfully' };
    } else {
      throw new Error('Failed to send webhook');
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return { success: false, message: 'Failed to send notification' };
  }
};

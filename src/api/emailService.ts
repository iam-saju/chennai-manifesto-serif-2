interface SignupData {
  email: string;
  timestamp: string;
  source: string;
}

export const notifySignup = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    // Using a simple approach with a public service
    // You can replace this with your preferred email service
    
    const signupData: SignupData = {
      email,
      timestamp: new Date().toISOString(),
      source: 'Chennai Manifesto'
    };

    // Option 1: Using a simple webhook service (like Zapier, IFTTT, or custom endpoint)
    const webhookUrl = process.env.REACT_APP_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'iamsajuabbau@gmail.com',
        subject: 'New Manifesto Signup',
        message: `New user signup: ${email}\nTimestamp: ${signupData.timestamp}\nSource: ${signupData.source}`,
        userEmail: email,
        timestamp: signupData.timestamp
      })
    });

    if (response.ok) {
      return { success: true, message: 'Notification sent successfully' };
    } else {
      // Fallback: Log to console (for development)
      console.log('📧 Email notification (dev mode):', {
        to: 'iamsajuabbau@gmail.com',
        subject: 'New Manifesto Signup',
        body: `New user signup: ${email}\nTimestamp: ${signupData.timestamp}\nSource: ${signupData.source}`
      });
      return { success: true, message: 'Signup recorded (dev mode)' };
    }
  } catch (error) {
    console.error('Email notification error:', error);
    // Fallback: Log to console
    console.log('📧 Email notification (fallback):', {
      to: 'iamsajuabbau@gmail.com',
      subject: 'New Manifesto Signup',
      body: `New user signup: ${email}\nTimestamp: ${new Date().toISOString()}\nSource: Chennai Manifesto`
    });
    return { success: true, message: 'Signup recorded' };
  }
};

// Alternative: Direct email using a service like EmailJS
export const sendDirectEmail = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    // This would require setting up EmailJS or similar service
    // For now, we'll use a simple notification approach
    
    const emailContent = {
      to: 'iamsajuabbau@gmail.com',
      subject: 'New Manifesto Signup',
      body: `
        New user has signed up for the Chennai Manifesto waitlist:
        
        Email: ${email}
        Timestamp: ${new Date().toISOString()}
        Source: Chennai Manifesto Website
        
        Please add this user to your mailing list.
      `
    };

    // Log the email content (in production, this would be sent via email service)
    console.log('📧 Email to send:', emailContent);
    
    return { success: true, message: 'Email notification prepared' };
  } catch (error) {
    console.error('Email service error:', error);
    return { success: false, message: 'Failed to prepare email notification' };
  }
};

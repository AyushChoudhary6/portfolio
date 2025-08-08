# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you want emails sent to your Gmail)
4. Connect your Gmail account (ayushrjchoudhary2005@gmail.com)
5. Note down the "Service ID" (something like "service_xxxxxxx")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** portfolio_contact
**Subject:** New Portfolio Contact: {{from_name}}
**Content:**
```
Hi Ayush,

You have a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Note down the "Template ID" (something like "template_xxxxxxx")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your "Public Key" (something like "xxxxxxxxxxxxxxx")

## Step 5: Update Contact.jsx
Replace these placeholders in your Contact.jsx file:
- `YOUR_SERVICE_ID` → Your Gmail Service ID
- `YOUR_TEMPLATE_ID` → Your Template ID  
- `YOUR_PUBLIC_KEY` → Your Public Key

## Step 6: Test the Form
1. Save the file
2. Go to your website (http://localhost:5174)
3. Fill out the contact form
4. Check your Gmail inbox for the message!

## Example Configuration
```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';  
const publicKey = 'abcd1234567890';
```

## Notes:
- EmailJS free plan allows 200 emails/month
- Emails may go to spam initially - mark them as "Not Spam"
- You can customize the template design in EmailJS dashboard

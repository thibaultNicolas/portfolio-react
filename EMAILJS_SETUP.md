# 📧 EmailJS Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a **free account** (200 emails/month)
3. Verify your email address

### Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Follow the setup instructions
5. **Copy your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New message from {{from_name}} - Portfolio Contact

From: {{from_name}} <{{from_email}}>
To: {{to_name}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (e.g., `user_abcdef123456`)

### Step 5: Update Configuration

1. Open `src/lib/emailjs.config.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_abc123", // Your actual service ID
  TEMPLATE_ID: "template_xyz789", // Your actual template ID
  PUBLIC_KEY: "user_abcdef123456", // Your actual public key
};
```

### Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email inbox!

## ✅ That's it! Your contact form now sends real emails!

## 🔧 Troubleshooting

### If emails don't arrive:

- Check your spam folder
- Verify the Service ID, Template ID, and Public Key
- Make sure your email service is properly connected
- Check the browser console for errors

### If you get rate limit errors:

- You've exceeded the free tier (200 emails/month)
- Consider upgrading to a paid plan

## 📱 Template Variables Available

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Nicolas Thibault)
- `{{reply_to}}` - Your email for replies

## 🎉 Success!

Your portfolio contact form is now fully functional and will send real emails to your inbox!

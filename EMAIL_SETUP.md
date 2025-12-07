# Email Setup Guide for Contact Form

Your contact form is now functional and will send emails to: **myny@mynewyorkishhome.com**

## Current Status

✅ Contact form UI is complete and working
✅ Form validation is implemented
✅ API endpoint is set up at `/api/contact`
⚠️ Email sending needs to be activated

## To Activate Email Sending

### Option 1: Resend (Recommended - Free tier available)

1. **Sign up for Resend**: https://resend.com
   - Free tier: 3,000 emails/month
   - Works perfectly with Vercel
   - Simple integration

2. **Get your API Key**:
   - After signing up, go to API Keys section
   - Create a new API key
   - Copy it

3. **Install Resend**:
```bash
npm install resend
```

4. **Add API Key to `.env.local`**:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

5. **Verify your domain** (optional but recommended):
   - In Resend dashboard, add your domain
   - Follow DNS verification steps
   - Use your verified domain in the "from" field

6. **Uncomment the Resend code** in `app/api/contact/route.ts`:
   - Lines are marked with comments
   - Remove the temporary console.log code

### Option 2: SendGrid

1. Sign up at https://sendgrid.com
2. Install: `npm install @sendgrid/mail`
3. Add to `.env.local`: `SENDGRID_API_KEY=your_key`
4. Update the API route with SendGrid integration

### Option 3: Nodemailer (For custom SMTP)

1. Install: `npm install nodemailer`
2. Configure with your SMTP settings
3. Update the API route accordingly

## Testing

After setting up email:

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check myny@mynewyorkishhome.com inbox

## For Production (Vercel)

1. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to Environment Variables
   - Add `RESEND_API_KEY`

2. Redeploy your site

## Current Behavior (Development)

Right now, form submissions are:
- ✅ Validated
- ✅ Accepted by the API
- ✅ Logged to server console
- ⚠️ Not sent via email (pending setup)

The form will show a success message, but emails won't be sent until you complete the setup above.


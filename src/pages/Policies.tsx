import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const policies: Record<string, { title: string; content: string }> = {
  cancellation: {
    title: 'Cancellation & Refund Policy',
    content: `
# Cancellation & Refund Policy

Last updated: January 2024

## Overview

We understand that plans can change. This policy outlines the refund structure for trek bookings cancelled by participants.

## Cancellation by Participant

### Domestic Treks (Sahyadri & Weekend Getaways)

| Days Before Departure | Refund Amount |
|----------------------|---------------|
| 15+ days | 80% of trek fee |
| 7-14 days | 50% of trek fee |
| 3-6 days | 25% of trek fee |
| Less than 3 days | No refund |

### Himalayan Treks

| Days Before Departure | Refund Amount |
|----------------------|---------------|
| 30+ days | 80% of trek fee |
| 15-29 days | 50% of trek fee |
| 7-14 days | 25% of trek fee |
| Less than 7 days | No refund |

### International Treks

| Days Before Departure | Refund Amount |
|----------------------|---------------|
| 60+ days | 70% of trek fee |
| 30-59 days | 50% of trek fee |
| 15-29 days | 25% of trek fee |
| Less than 15 days | No refund |

## Non-Refundable Components

The following are non-refundable regardless of cancellation timing:
- Visa fees and charges
- Flight tickets (if included in package)
- Special permits and park fees already paid
- Travel insurance premiums

## Cancellation by Trek-Nation

If we cancel a trek due to:
- Insufficient registrations
- Natural disasters or government restrictions
- Safety concerns

You will receive either:
- Full refund of the trek fee, OR
- Credit for a future trek of equal value (valid for 12 months)

## Rescheduling

- You may reschedule to a different date for the same trek (subject to availability)
- Rescheduling is free if done 15+ days before departure
- Rescheduling within 15 days incurs a ₹500 processing fee

## How to Cancel

1. Email us at bookings@trek-nation.in with your booking ID
2. Call us at +91 98765 43210
3. WhatsApp us at +91 98765 43210

Refunds are processed within 7-10 business days to the original payment method.

## Contact

For any queries regarding this policy, please contact us at hello@trek-nation.in
    `,
  },
  terms: {
    title: 'Terms & Conditions',
    content: `
# Terms & Conditions

Last updated: January 2024

## 1. Acceptance of Terms

By booking a trek with Trek-Nation ("we", "us", "our"), you agree to these Terms & Conditions. Please read them carefully before making a booking.

## 2. Booking & Payment

### 2.1 Booking Confirmation
- Bookings are confirmed only upon receipt of full payment
- A booking confirmation email will be sent within 24 hours of payment

### 2.2 Payment Methods
- We accept UPI, credit/debit cards, net banking, and bank transfers
- All payments are processed through secure payment gateways

### 2.3 Pricing
- All prices are in Indian Rupees (INR) unless stated otherwise
- Prices are subject to change without notice, but confirmed bookings honor the original price

## 3. Trek Requirements

### 3.1 Fitness
- Participants must be in good physical health
- We reserve the right to refuse participation if we deem someone unfit
- For challenging/extreme treks, a fitness declaration may be required

### 3.2 Age Requirements
- Minimum age: 14 years (or as specified for individual treks)
- Participants under 18 must be accompanied by a guardian
- Maximum age: 65 years (exceptions with medical clearance)

### 3.3 Medical Conditions
- Disclose all medical conditions during booking
- Carry personal medications
- Travel insurance covering trekking activities is recommended

## 4. Our Responsibilities

### 4.1 We Provide
- Experienced, trained trek leaders
- First aid kit and emergency protocols
- All inclusions as listed on the trek page
- Best efforts to ensure your safety and enjoyment

### 4.2 Limitations
- We are not responsible for injuries from participant negligence
- We are not liable for loss of personal belongings
- We reserve the right to alter routes for safety reasons
- We are not responsible for delays due to weather or third parties

## 5. Participant Responsibilities

You agree to:
- Follow all instructions from trek leaders
- Not consume alcohol or drugs during the trek
- Respect the environment (no littering, no damage to flora/fauna)
- Respect fellow trekkers and local communities
- Carry all required items as per the "Things to Carry" list

## 6. Photography & Media

- We may take photos/videos during treks
- These may be used for promotional purposes
- Inform us if you do not wish to be photographed

## 7. Liability Waiver

Trekking involves inherent risks. By booking, you acknowledge:
- You participate at your own risk
- You release Trek-Nation from liability for accidents/injuries
- You have adequate health insurance

## 8. Dispute Resolution

- Disputes will be resolved through arbitration in Mumbai
- Indian law governs these terms

## 9. Changes to Terms

We may update these terms. Continued use of our services constitutes acceptance of updated terms.

## 10. Contact

For questions about these terms:
- Email: hello@trek-nation.in
- Phone: +91 98765 43210
    `,
  },
  privacy: {
    title: 'Privacy Policy',
    content: `
# Privacy Policy

Last updated: January 2024

## Introduction

Trek-Nation ("we", "us", "our") respects your privacy. This policy explains how we collect, use, and protect your personal information.

## Information We Collect

### Personal Information
- Name, email, phone number
- Emergency contact details
- Medical information (for safety purposes)
- Payment information (processed securely by payment gateways)

### Automatically Collected
- Browser type and device information
- IP address and location (approximate)
- Pages visited and time spent
- Cookies and similar technologies

## How We Use Your Information

### To Provide Services
- Process bookings and payments
- Send booking confirmations and trip details
- Communicate important trek updates
- Provide customer support

### To Improve Our Services
- Analyze website usage patterns
- Develop new treks and features
- Personalize your experience

### Marketing (with your consent)
- Send newsletters and promotional offers
- Share trek updates and new destinations
- You can opt out anytime

## Information Sharing

We do not sell your personal information. We may share with:
- Trek partners (guides, accommodations) for service delivery
- Payment processors for transactions
- Legal authorities if required by law

## Data Security

- SSL encryption for all data transmission
- Secure servers with access controls
- Regular security audits
- Limited employee access to personal data

## Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate data
- Request deletion of your data
- Opt out of marketing communications
- Withdraw consent

## Cookies

We use cookies to:
- Remember your preferences
- Analyze site traffic
- Improve user experience

You can disable cookies in your browser settings.

## Third-Party Links

Our website may contain links to third-party sites. We are not responsible for their privacy practices.

## Children's Privacy

We do not knowingly collect data from children under 14 without parental consent.

## Changes to This Policy

We may update this policy. Check this page periodically for changes.

## Contact Us

For privacy-related queries:
- Email: privacy@trek-nation.in
- Phone: +91 98765 43210
- Address: Trek-Nation, Andheri West, Mumbai - 400053
    `,
  },
};

export default function Policies() {
  const { type } = useParams<{ type: string }>();
  const policy = type ? policies[type] : undefined;

  if (!policy) {
    return (
      <Layout>
        <section className="py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-3xl font-bold mb-8">Policies</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(policies).map(([key, pol]) => (
                <Link
                  key={key}
                  to={`/policies/${key}`}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
                >
                  <h2 className="font-display text-xl font-semibold mb-2">{pol.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    Read our {pol.title.toLowerCase()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <Link
            to="/policies"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> All Policies
          </Link>

          <div className="max-w-3xl">
            <div className="prose prose-invert max-w-none">
              {policy.content.split('\n').map((line, idx) => {
                if (line.startsWith('# ')) {
                  return <h1 key={idx} className="font-display text-3xl md:text-4xl font-bold mb-6">{line.replace('# ', '')}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={idx} className="font-display text-2xl font-bold mt-10 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={idx} className="font-display text-lg font-semibold mt-6 mb-3">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('| ')) {
                  // Table row - simplified rendering
                  if (line.includes('---')) return null;
                  const cells = line.split('|').filter(Boolean).map(c => c.trim());
                  return (
                    <div key={idx} className="flex gap-4 py-2 border-b border-border/30 text-sm">
                      <span className="flex-1 text-muted-foreground">{cells[0]}</span>
                      <span className="font-medium">{cells[1]}</span>
                    </div>
                  );
                }
                if (line.startsWith('- ')) {
                  return <li key={idx} className="text-muted-foreground ml-4">{line.replace('- ', '')}</li>;
                }
                if (line.trim()) {
                  return <p key={idx} className="text-muted-foreground leading-relaxed">{line}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

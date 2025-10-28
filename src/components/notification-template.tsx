import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AdminNotificationTemplateProps {
  recipientName: string;
  recipientEmail: string;
  subject: string;
  message: string;
}

export default function NotificationTemplate({
  recipientName,
  recipientEmail,
  subject,
  message,
}: AdminNotificationTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {recipientName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://delightech2025.vercel.app/assets/DLT_2.png"
              width="60"
              height="60"
              alt="Delightech Logo"
              style={logo}
            />
            <Heading style={headerTitle}>New Contact Form Submission</Heading>
          </Section>

          {/* Main Content */}
          <Section style={mainContent}>
            <div style={alertBadge}>🔔 NEW MESSAGE</div>

            {/* Contact Details */}
            <Section style={infoBox}>
              <table style={infoTable}>
                <tbody>
                  <tr>
                    <td style={labelCell}>
                      <Text style={label}>👤 Name:</Text>
                    </td>
                    <td style={valueCell}>
                      <Text style={value}>{recipientName}</Text>
                    </td>
                  </tr>
                  <tr>
                    <td style={labelCell}>
                      <Text style={label}>📧 Email:</Text>
                    </td>
                    <td style={valueCell}>
                      <Text style={value}>
                        <a href={`mailto:${recipientEmail}`} style={emailLink}>
                          {recipientEmail}
                        </a>
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td style={labelCell}>
                      <Text style={label}>📋 Subject:</Text>
                    </td>
                    <td style={valueCell}>
                      <Text style={value}>{subject}</Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Message Content */}
            <Section style={messageBox}>
              <Heading as="h3" style={messageTitle}>
                💬 Message:
              </Heading>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Quick Actions */}
            <Section style={actionsSection}>
              <Text style={actionsTitle}>Quick Actions:</Text>
              <div style={actionButtons}>
                <a
                  href={`mailto:${recipientEmail}?subject=Re: ${subject}`}
                  style={actionButton}
                >
                  ✉️ Reply to {recipientName}
                </a>
              </div>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This is an automated notification from your Delightech website
              contact form.
            </Text>
            <Text style={timestamp}>
              Received:{" "}
              {new Date().toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "short",
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  backgroundColor: "#ffffff",
  maxWidth: "600px",
  border: "1px solid #e5e7eb",
};

const header = {
  backgroundColor: "#1f2937",
  padding: "32px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto 16px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "12px",
};

const headerTitle = {
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
  color: "#ffffff",
};

const mainContent = {
  padding: "32px",
};

const alertBadge = {
  backgroundColor: "#ef4444",
  color: "#ffffff",
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  display: "inline-block",
  marginBottom: "24px",
};

const infoBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "24px",
};

const infoTable = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const labelCell = {
  paddingRight: "16px",
  paddingBottom: "12px",
  verticalAlign: "top" as const,
  width: "120px",
};

const valueCell = {
  paddingBottom: "12px",
};

const label = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#6b7280",
  margin: "0",
};

const value = {
  fontSize: "15px",
  color: "#1f2937",
  margin: "0",
};

const emailLink = {
  color: "#2563eb",
  textDecoration: "none",
};

const messageBox = {
  backgroundColor: "#eff6ff",
  border: "2px solid #3b82f6",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "24px",
};

const messageTitle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#1e40af",
  margin: "0 0 12px 0",
};

const messageText = {
  fontSize: "15px",
  color: "#1f2937",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const actionsSection = {
  backgroundColor: "#f3f4f6",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "24px",
};

const actionsTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#4b5563",
  margin: "0 0 12px 0",
};

const actionButtons = {
  display: "flex",
  gap: "8px",
};

const actionButton = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
};

const footer = {
  backgroundColor: "#f9fafb",
  padding: "24px 32px",
  borderTop: "1px solid #e5e7eb",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "13px",
  color: "#6b7280",
  margin: "0 0 8px 0",
};

const timestamp = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
};

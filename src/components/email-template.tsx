import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface CompanyEmailTemplateProps {
  recipientName: string;
  recipientEmail?: string; 
  subject: string;
  message: string; 
}

export function CompanyEmailTemplate({
  recipientName = "Valued Customer",
}: CompanyEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for contacting Delightech - We'll respond within 24 hours
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Gradient */}
          <Section style={header}>
            {/* Logo */}
            <Section style={logoContainer}>
              <Img
                src="https://delightech2025.vercel.app/assets/DLT_2.png"
                width="80"
                height="80"
                alt="Delightech Logo"
                style={logo}
              />
            </Section>

            {/* Header Content */}
            <Section style={headerContent}>
              <div style={badge}>DELIGHTECH CO., LTD</div>
              <Heading style={headerTitle}>Thank You for Contacting Us</Heading>
              <Text style={headerSubtitle}>We've received your message</Text>
            </Section>
          </Section>

          {/* Main Content */}
          <Section style={mainContent}>
            {/* Greeting */}
            <Text style={greeting}>DEAR {recipientName.toUpperCase()},</Text>
            <Text style={bodyText}>
              Our team will review your inquiry and get back to you within 24
              hours. We appreciate your interest in Delightech.
            </Text>

            {/* Why Choose Delightech */}
            <Section style={featuresBox}>
              <Heading as="h3" style={featuresTitle}>
                🛡️ Why Choose Delightech?
              </Heading>

              <table style={featuresTable}>
                <tbody>
                  <tr>
                    <td style={featureCell}>
                      <table>
                        <tbody>
                          <tr>
                            <td style={featureIconCell}>
                              <Img
                                src="https://delightech2025.vercel.app/assets/LUYLEUN_logo.png"
                                width="40"
                                height="40"
                                alt="LUYLEUN"
                                style={featureIcon}
                              />
                            </td>
                            <td>
                              <Text style={featureName}>LUYLEUN App</Text>
                              <Text style={featureDesc}>
                                Digital Financial Platform
                              </Text>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={featureCell}>
                      <table>
                        <tbody>
                          <tr>
                            <td style={featureIconCell}>
                              <div style={featureIconEmoji}>👥</div>
                            </td>
                            <td>
                              <Text style={featureName}>500K+ Users</Text>
                              <Text style={featureDesc}>Trusted Community</Text>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style={featureCell}>
                      <table>
                        <tbody>
                          <tr>
                            <td style={featureIconCell}>
                              <div
                                style={{
                                  ...featureIconEmoji,
                                  backgroundColor: "#d97706",
                                }}
                              >
                                📈
                              </div>
                            </td>
                            <td>
                              <Text style={featureName}>150% Growth</Text>
                              <Text style={featureDesc}>Year-over-Year</Text>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={featureCell}>
                      <table>
                        <tbody>
                          <tr>
                            <td style={featureIconCell}>
                              <div
                                style={{
                                  ...featureIconEmoji,
                                  backgroundColor: "#7c3aed",
                                }}
                              >
                                🔒
                              </div>
                            </td>
                            <td>
                              <Text style={featureName}>
                                Bank-Grade Security
                              </Text>
                              <Text style={featureDesc}>99.9% Uptime</Text>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* CTA Button */}
            <Section style={ctaSection}>
              <Button style={button} href="https://delightech.asia">
                🔗 Visit Our Website
              </Button>
            </Section>

            {/* Download Section */}
            <Section style={downloadSection}>
              <Heading as="h3" style={downloadTitle}>
                Download LUYLEUN Today
              </Heading>
              <Row>
                <Column align="center">
                  <Link href="https://apps.apple.com/kh/app/luyleun/id1570756469LuyLeun">
                    <Img
                      src="https://delightech2025.vercel.app/assets/APPSTORE.png"
                      height="50"
                      alt="Download on the App Store"
                      style={storeButton}
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://play.google.com/store/apps/details?id=com.delightech.luyleun">
                    <Img
                      src="https://delightech2025.vercel.app/assets/PLAYSTORE.png"
                      height="50"
                      alt="Get it on Google Play"
                      style={storeButton}
                    />
                  </Link>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            {/* Company Info */}
            <Img
              src="https://delightech2025.vercel.app/assets/tagline2.png"
              height="50"
              alt="Delightech"
              style={footerLogo}
            />
            <Text style={footerDescription}>
              Building sustainable growth through innovation, leadership, and
              excellence across industries. Transforming lives through
              technology.
            </Text>

            <hr style={divider} />

            {/* Contact Info */}
            <Text style={contactInfo}>
              📍 Chamkar Mon Tonle Bassac, 206 D Preah Norodom Blvd, Phnom Penh,
              Cambodia
            </Text>
            <Text style={contactInfo}>📞 +855 (0) 123 456 789</Text>
            <Text style={contactInfo}>✉️ info@delightech.asia</Text>

            <hr style={divider} />

            {/* Social & Legal */}
            <Section style={socialSection}>
              <Link href="https://delightech.asia" style={socialLink}>
                🌐
              </Link>
              <Link href="mailto:info@delightech.asia" style={socialLink}>
                ✉️
              </Link>
            </Section>

            <Text style={copyright}>
              © 2025 Delightech Co., Ltd. All rights reserved.
            </Text>
            <Text style={legalLinks}>
              <Link href="#" style={legalLink}>
                Privacy Policy
              </Link>
              {" • "}
              <Link href="#" style={legalLink}>
                Terms of Service
              </Link>
              {" • "}
              <Link href="#" style={legalLink}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  backgroundColor: "#ffffff",
  maxWidth: "600px",
};

const header = {
  background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
  backgroundColor: "#2563eb",
  padding: "48px 32px",
  textAlign: "center" as const,
};

const logoContainer = {
  marginBottom: "32px",
};

const logo = {
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "16px",
};

const headerContent = {
  textAlign: "center" as const,
};

const badge = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  color: "#ffffff",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  display: "inline-block",
  marginBottom: "16px",
};

const headerTitle = {
  fontSize: "36px",
  fontWeight: "700",
  margin: "16px 0 8px 0",
  color: "#ffffff",
  lineHeight: "1.2",
};

const headerSubtitle = {
  color: "#dbeafe",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0",
};

const mainContent = {
  padding: "48px 32px",
};

const greeting = {
  fontSize: "18px",
  color: "#2563eb",
  marginBottom: "24px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const bodyText = {
  color: "#4b5563",
  lineHeight: "1.7",
  fontSize: "16px",
  margin: "0 0 32px 0",
};

const featuresBox = {
  background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
  backgroundColor: "#dbeafe",
  padding: "24px",
  marginBottom: "32px",
  borderRadius: "16px",
  border: "1px solid #93c5fd",
};

const featuresTitle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#1e40af",
  marginBottom: "16px",
  textAlign: "center" as const,
};

const featuresTable = {
  width: "100%",
};

const featureCell = {
  padding: "8px",
  width: "50%",
};

const featureIconCell = {
  width: "40px",
  paddingRight: "12px",
  verticalAlign: "top" as const,
};

const featureIcon = {
  borderRadius: "8px",
};

const featureIconEmoji = {
  width: "40px",
  height: "40px",
  backgroundColor: "#059669",
  borderRadius: "8px",
  textAlign: "center" as const,
  lineHeight: "40px",
  fontSize: "20px",
};

const featureName = {
  fontWeight: "600",
  color: "#1e40af",
  margin: "0 0 4px 0",
  fontSize: "14px",
};

const featureDesc = {
  fontSize: "12px",
  color: "#3730a3",
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
  padding: "32px 0",
};

const button = {
  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  backgroundColor: "#2563eb",
  color: "#ffffff",
  padding: "16px 32px",
  fontSize: "16px",
  fontWeight: "600",
  borderRadius: "12px",
  textDecoration: "none",
  display: "inline-block",
};

const downloadSection = {
  backgroundColor: "#f9fafb",
  borderRadius: "16px",
  padding: "24px",
  textAlign: "center" as const,
};

const downloadTitle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1f2937",
  marginBottom: "16px",
};

const storeButton = {
  margin: "0 8px",
};

const footer = {
  backgroundColor: "#f3f4f6",
  padding: "32px",
  textAlign: "center" as const,
};

const footerLogo = {
  margin: "0 auto 16px",
};

const footerDescription = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "1.6",
  maxWidth: "400px",
  margin: "0 auto",
};

const divider = {
  border: "none",
  borderTop: "1px solid #d1d5db",
  margin: "24px 0",
};

const contactInfo = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "8px 0",
};

const socialSection = {
  margin: "16px 0",
};

const socialLink = {
  color: "#2563eb",
  textDecoration: "none",
  fontSize: "20px",
  margin: "0 12px",
};

const copyright = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0 0 8px 0",
};

const legalLinks = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
};

const legalLink = {
  color: "#9ca3af",
  textDecoration: "none",
};

export default CompanyEmailTemplate;

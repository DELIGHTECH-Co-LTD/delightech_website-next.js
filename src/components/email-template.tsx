import * as React from "react";

interface CompanyEmailTemplateProps {
  recipientName?: string;
}

export function CompanyEmailTemplate({
  recipientName = "Valued Customer",
}: CompanyEmailTemplateProps) {
  const emailContent = {
    title: "Thank You for Contacting Us",
    subtitle: "We've received your message",
    body: "Our team will review your inquiry and get back to you within 24 hours. We appreciate your interest in Delightech.",
    cta: {
      text: "Visit Our Website",
      link: "https://delightech.asia",
    },
  };

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      border={0}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        width: "100%",
      }}
    >
      <tbody>
        {/* Email Header with Gradient Background */}
        <tr>
          <td
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
              backgroundColor: "#2563eb",
              textAlign: "center",
              padding: "48px 32px",
            }}
          >
            <table
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{ width: "100%" }}
            >
              <tbody>
                {/* Logo Section */}
                <tr>
                  <td style={{ paddingBottom: "32px", textAlign: "center" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{
                        margin: "0 auto",
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        padding: "16px",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://via.placeholder.com/80x80?text=DLT"
                              alt="Delightech Logo"
                              style={{
                                width: "80px",
                                height: "80px",
                                display: "block",
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Header Content */}
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{ margin: "0 auto" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              color: "#ffffff",
                              padding: "6px 16px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: "600",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              marginBottom: "16px",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                            }}
                          >
                            DELIGHTECH CO., LTD
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h1
                      style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        margin: "16px 0 8px 0",
                        color: "#ffffff",
                        lineHeight: "1.2",
                      }}
                    >
                      {emailContent.title}
                    </h1>
                    <p
                      style={{
                        color: "#dbeafe",
                        fontSize: "18px",
                        fontWeight: "500",
                        margin: "0",
                      }}
                    >
                      {emailContent.subtitle}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Main Content */}
        <tr>
          <td style={{ padding: "48px 32px", backgroundColor: "#ffffff" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{ width: "100%" }}
            >
              <tbody>
                {/* Greeting */}
                <tr>
                  <td style={{ paddingBottom: "32px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#2563eb",
                        marginBottom: "24px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Dear {recipientName},
                    </p>
                    <p
                      style={{
                        color: "#4b5563",
                        lineHeight: "1.7",
                        fontSize: "16px",
                        margin: "0",
                      }}
                    >
                      {emailContent.body}
                    </p>
                  </td>
                </tr>

                {/* Why Choose Delightech Section */}
                <tr>
                  <td
                    style={{
                      background:
                        "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                      backgroundColor: "#dbeafe",
                      padding: "24px",
                      marginBottom: "32px",
                      borderRadius: "16px",
                      border: "1px solid #93c5fd",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#1e40af",
                        marginBottom: "16px",
                        textAlign: "center",
                      }}
                    >
                      🛡️ Why Choose Delightech?
                    </h3>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{ width: "100%" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ padding: "8px", width: "50%" }}>
                            <table cellPadding="0" cellSpacing="0" border={0}>
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      width: "40px",
                                      paddingRight: "12px",
                                    }}
                                  >
                                    <img
                                      src="https://via.placeholder.com/40x40?text=LL"
                                      alt="LUYLEUN"
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "8px",
                                        display: "block",
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <p
                                      style={{
                                        fontWeight: "600",
                                        color: "#1e40af",
                                        margin: "0 0 4px 0",
                                        fontSize: "14px",
                                      }}
                                    >
                                      LUYLEUN App
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        color: "#3730a3",
                                        margin: "0",
                                      }}
                                    >
                                      Digital Financial Platform
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ padding: "8px", width: "50%" }}>
                            <table cellPadding="0" cellSpacing="0" border={0}>
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      width: "40px",
                                      paddingRight: "12px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "#059669",
                                        borderRadius: "8px",
                                        textAlign: "center",
                                        lineHeight: "40px",
                                        fontSize: "20px",
                                      }}
                                    >
                                      👥
                                    </div>
                                  </td>
                                  <td>
                                    <p
                                      style={{
                                        fontWeight: "600",
                                        color: "#1e40af",
                                        margin: "0 0 4px 0",
                                        fontSize: "14px",
                                      }}
                                    >
                                      500K+ Users
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        color: "#3730a3",
                                        margin: "0",
                                      }}
                                    >
                                      Trusted Community
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "8px", width: "50%" }}>
                            <table cellPadding="0" cellSpacing="0" border={0}>
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      width: "40px",
                                      paddingRight: "12px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "#d97706",
                                        borderRadius: "8px",
                                        textAlign: "center",
                                        lineHeight: "40px",
                                        fontSize: "20px",
                                      }}
                                    >
                                      📈
                                    </div>
                                  </td>
                                  <td>
                                    <p
                                      style={{
                                        fontWeight: "600",
                                        color: "#1e40af",
                                        margin: "0 0 4px 0",
                                        fontSize: "14px",
                                      }}
                                    >
                                      150% Growth
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        color: "#3730a3",
                                        margin: "0",
                                      }}
                                    >
                                      Year-over-Year
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ padding: "8px", width: "50%" }}>
                            <table cellPadding="0" cellSpacing="0" border={0}>
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      width: "40px",
                                      paddingRight: "12px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "#7c3aed",
                                        borderRadius: "8px",
                                        textAlign: "center",
                                        lineHeight: "40px",
                                        fontSize: "20px",
                                      }}
                                    >
                                      🔒
                                    </div>
                                  </td>
                                  <td>
                                    <p
                                      style={{
                                        fontWeight: "600",
                                        color: "#1e40af",
                                        margin: "0 0 4px 0",
                                        fontSize: "14px",
                                      }}
                                    >
                                      Bank-Grade Security
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        color: "#3730a3",
                                        margin: "0",
                                      }}
                                    >
                                      99.9% Uptime
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Call to Action */}
                <tr>
                  <td style={{ textAlign: "center", padding: "32px 0" }}>
                    <a
                      href={emailContent.cta.link}
                      style={{
                        display: "inline-block",
                        background:
                          "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                        backgroundColor: "#2563eb",
                        color: "#ffffff",
                        padding: "16px 32px",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "12px",
                        textDecoration: "none",
                      }}
                    >
                      🔗 {emailContent.cta.text}
                    </a>
                  </td>
                </tr>

                {/* Download Section */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#f9fafb",
                      borderRadius: "16px",
                      padding: "24px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#1f2937",
                        marginBottom: "16px",
                      }}
                    >
                      Download LUYLEUN Today
                    </h3>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{ margin: "0 auto" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ padding: "0 8px" }}>
                            <a
                              href="https://apps.apple.com/kh/app/luyleun/id1570756469LuyLeun"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://via.placeholder.com/135x45?text=App+Store"
                                alt="Download on the App Store"
                                style={{ height: "45px", display: "block" }}
                              />
                            </a>
                          </td>
                          <td style={{ padding: "0 8px" }}>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.delightech.luyleun"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://via.placeholder.com/135x45?text=Google+Play"
                                alt="Get it on Google Play"
                                style={{ height: "45px", display: "block" }}
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Footer */}
        <tr>
          <td style={{ backgroundColor: "#f3f4f6", padding: "32px" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{ width: "100%" }}
            >
              <tbody>
                {/* Company Info */}
                <tr>
                  <td style={{ textAlign: "center", paddingBottom: "24px" }}>
                    <img
                      src="https://via.placeholder.com/200x50?text=Delightech"
                      alt="Delightech Tagline"
                      style={{
                        width: "200px",
                        height: "auto",
                        marginBottom: "16px",
                        display: "block",
                        margin: "0 auto 16px auto",
                      }}
                    />
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        maxWidth: "400px",
                        margin: "0 auto",
                      }}
                    >
                      Building sustainable growth through innovation,
                      leadership, and excellence across industries. Transforming
                      lives through technology.
                    </p>
                  </td>
                </tr>

                {/* Divider */}
                <tr>
                  <td style={{ padding: "24px 0" }}>
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "#d1d5db",
                      }}
                    />
                  </td>
                </tr>

                {/* Contact Information */}
                <tr>
                  <td style={{ paddingBottom: "24px" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{ width: "100%" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              fontSize: "14px",
                              color: "#6b7280",
                              textAlign: "center",
                              padding: "8px",
                            }}
                          >
                            📍 Chamkar Mon Tonle Bassac, 206 D Preah Norodom
                            Blvd, Phnom Penh, Cambodia
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "14px",
                              color: "#6b7280",
                              textAlign: "center",
                              padding: "8px",
                            }}
                          >
                            📞 +855 (0) 123 456 789
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "14px",
                              color: "#6b7280",
                              textAlign: "center",
                              padding: "8px",
                            }}
                          >
                            ✉️ info@delightech.com
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Divider */}
                <tr>
                  <td style={{ padding: "24px 0" }}>
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "#d1d5db",
                      }}
                    />
                  </td>
                </tr>

                {/* Social Links & Legal */}
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{ margin: "0 auto 16px auto" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ padding: "0 12px" }}>
                            <a
                              href="https://delightech.asia"
                              style={{
                                color: "#2563eb",
                                textDecoration: "none",
                                fontSize: "20px",
                              }}
                            >
                              🌐
                            </a>
                          </td>
                          <td style={{ padding: "0 12px" }}>
                            <a
                              href="mailto:info@delightech.com"
                              style={{
                                color: "#2563eb",
                                textDecoration: "none",
                                fontSize: "20px",
                              }}
                            >
                              ✉️
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <p
                      style={{
                        fontSize: "12px",
                        color: "#9ca3af",
                        margin: "0 0 8px 0",
                      }}
                    >
                      &copy; 2025 Delightech Co., Ltd. All rights reserved.
                    </p>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{ margin: "0 auto" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ padding: "0 8px" }}>
                            <a
                              href="#"
                              style={{
                                color: "#9ca3af",
                                textDecoration: "none",
                                fontSize: "12px",
                              }}
                            >
                              Privacy Policy
                            </a>
                          </td>
                          <td style={{ color: "#9ca3af", fontSize: "12px" }}>
                            •
                          </td>
                          <td style={{ padding: "0 8px" }}>
                            <a
                              href="#"
                              style={{
                                color: "#9ca3af",
                                textDecoration: "none",
                                fontSize: "12px",
                              }}
                            >
                              Terms of Service
                            </a>
                          </td>
                          <td style={{ color: "#9ca3af", fontSize: "12px" }}>
                            •
                          </td>
                          <td style={{ padding: "0 8px" }}>
                            <a
                              href="#"
                              style={{
                                color: "#9ca3af",
                                textDecoration: "none",
                                fontSize: "12px",
                              }}
                            >
                              Unsubscribe
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

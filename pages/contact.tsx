"use client";

import Layout from "../components/Layout";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, XCircle, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_7kwetud",
        "template_ssor4om",
        formData,
        "x52LGN-wBJsjT0kfM"
      );
      setStatus("success");
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus("idle");
  };

  return (
    <Layout>
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center "
        style={{
          backgroundImage: "url('/assets/Angkorwat.png')",
        }}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
        <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
          <div className="p-8 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 space-y-6">
            <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
            <p className="text-gray-300 leading-relaxed">
              We’d love to hear from you. Whether it’s a project, partnership,
              or just to say hello — our team is always ready to connect.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400/10 p-3 rounded-3xl">
                  <Mail className="text-yellow-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">contact@delightech.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-400/10 p-3 rounded-3xl">
                  <Phone className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+855 12 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-400/10 p-3 rounded-3xl">
                  <MapPin className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Office</p>
                  <p className="font-medium">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <h2 className="text-4xl font-bold mb-4">SEND A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="full name"
                  className="w-full p-3 rounded-3xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full p-3 rounded-3xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex justify-center items-center gap-2 py-3 rounded-3xl bg-blue-700 text-white font-semibold hover:bg-blue-300 transition-all duration-300 disabled:opacity-60"
              >
                <Send size={18} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Modal Popup */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-xl">
              {status === "success" ? (
                <>
                  <CheckCircle className="mx-auto text-green-400 w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="mx-auto text-red-400 w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Oops! Something went wrong.
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Please try again later or email us directly.
                  </p>
                </>
              )}
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-3xl bg-blue-400 text-gray-900 font-semibold hover:bg-blue-300 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

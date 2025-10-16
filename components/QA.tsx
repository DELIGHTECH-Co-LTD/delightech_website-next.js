import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface QAItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const qaData: QAItem[] = [
  {
    id: 1,
    question: "What is LUYLEUN and how does it work?",
    answer:
      "LUYLEUN is Cambodia's leading digital financial platform that provides secure, fast, and accessible financial services. It allows users to transfer money instantly, pay bills, access micro-lending services, and manage their digital wallet with multi-currency support. The app uses advanced security features including biometric authentication to ensure safe transactions.",
    category: "general",
  },
  {
    id: 2,
    question: "Is LUYLEUN safe and secure to use?",
    answer:
      "Yes, LUYLEUN employs bank-grade security measures including end-to-end encryption, multi-factor authentication, and biometric security. We maintain 99.9% uptime with real-time fraud detection and prevention systems. All transactions are protected by international banking security standards.",
    category: "security",
  },
  {
    id: 3,
    question: "How can I download and start using LUYLEUN?",
    answer:
      "You can download LUYLEUN from both the App Store and Google Play Store. After installation, simply create your account using your phone number, verify your identity, and you can start using all our financial services immediately. The registration process takes less than 5 minutes.",
    category: "general",
  },
  {
    id: 4,
    question: "What are the fees for using LUYLEUN services?",
    answer:
      "LUYLEUN offers competitive and transparent pricing. Basic money transfers within Cambodia are free for amounts under $100. For larger amounts and international transfers, we charge minimal fees starting from 0.5%. Bill payments and wallet top-ups are completely free.",
    category: "pricing",
  },
  {
    id: 5,
    question: "Can I use LUYLEUN for business transactions?",
    answer:
      "Absolutely! LUYLEUN offers comprehensive business solutions including merchant payment integration, bulk payment processing, invoice management, and business analytics. We support both small businesses and large enterprises with customized solutions.",
    category: "business",
  },
  {
    id: 6,
    question: "What currencies does LUYLEUN support?",
    answer:
      "LUYLEUN supports multiple currencies including Cambodian Riel (KHR), US Dollar (USD), and other major currencies. Our multi-currency wallet allows you to hold, exchange, and transact in different currencies seamlessly.",
    category: "general",
  },
  {
    id: 7,
    question: "How does the micro-lending feature work?",
    answer:
      "Our AI-powered micro-lending service provides quick access to credit based on your transaction history and financial behavior. Loan amounts range from $50 to $5,000 with flexible repayment terms. The approval process is instant for eligible users with competitive interest rates.",
    category: "lending",
  },
  {
    id: 8,
    question: "What customer support options are available?",
    answer:
      "We provide 24/7 customer support through multiple channels including in-app chat, phone support, email, and our help center. Our dedicated support team is available in Khmer and English to assist with any questions or issues.",
    category: "support",
  },
  {
    id: 9,
    question: "How does Delightech ensure regulatory compliance?",
    answer:
      "Delightech works closely with the National Bank of Cambodia and other regulatory bodies to ensure full compliance with all financial regulations. We maintain proper licensing, follow KYC/AML procedures, and regularly undergo security audits.",
    category: "compliance",
  },
  {
    id: 10,
    question: "What are Delightech's future expansion plans?",
    answer:
      "We're planning regional expansion into Vietnam and Thailand by 2025, introducing new products like digital banking services, enhanced AI features, and strategic partnerships with regional financial institutions. We're also developing SME financing solutions and blockchain integration.",
    category: "future",
  },
];

const QA: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { value: "all", label: "All Questions" },
    { value: "general", label: "General" },
    { value: "security", label: "Security" },
    { value: "pricing", label: "Pricing" },
    { value: "business", label: "Business" },
    { value: "lending", label: "Lending" },
    { value: "support", label: "Support" },
    { value: "compliance", label: "Compliance" },
    { value: "future", label: "Future Plans" },
  ];

  const filteredQAs =
    selectedCategory === "all"
      ? qaData
      : qaData.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center py-24 px-8 md:px-24 overflow-hidden transition-colors duration-500">
      {/* Background Pattern - Responsive to theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 w-full">
        {/* Hero Title Section - Theme Responsive */}
        <div className="text-center mb-20">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 text-transparent bg-clip-text text-sm font-semibold uppercase tracking-wider mb-3">
            Support Center
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300 uppercase">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-300 dark:to-green-300 text-transparent bg-clip-text uppercase">
              Questions
            </span>
          </h1>
          <p className="text-gray-700 dark:text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Find answers to common questions about LUYLEUN, Delightech, and our
            financial services. Expert support is just a click away.
          </p>
        </div>

        {/* Category Filter - Theme Responsive */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`group relative px-8 py-4 rounded-2xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.value
                    ? "bg-blue-600 dark:bg-white/20 text-white dark:text-white border border-blue-600 dark:border-white/30 shadow-lg dark:shadow-xl backdrop-blur-lg"
                    : "bg-white/80 dark:bg-white/5 text-gray-700 dark:text-white/70 border border-gray-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-white/15 hover:text-blue-600 dark:hover:text-white hover:border-blue-300 dark:hover:border-white/25 backdrop-blur-sm"
                }`}
              >
                <span className="relative z-10">{category.label}</span>
                {selectedCategory === category.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-green-500/20 rounded-2xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* QA Items - Theme Responsive Card Pattern */}
        <div className="grid gap-6">
          {filteredQAs.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white/80 dark:bg-white/10 backdrop-blur-lg border border-gray-200/50 dark:border-white/20 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/90 dark:hover:bg-white/15 hover:border-gray-300 dark:hover:border-white/30 hover:shadow-2xl dark:hover:shadow-blue-500/10 transform hover:-translate-y-2 "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-8 text-left flex justify-between items-start gap-6 transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors leading-tight">
                    {item.question}
                  </h3>
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-green-500/20 backdrop-blur-sm border border-blue-200 dark:border-white/20 text-blue-700 dark:text-white/80 text-xs font-medium px-4 py-2 rounded-full capitalize">
                    {item.category}
                  </span>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <div className="relative">
                    <div className="bg-gray-100 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full p-3 group-hover:bg-blue-100 dark:group-hover:bg-white/20 group-hover:border-blue-300 dark:group-hover:border-white/30 transition-all duration-300 group-hover:scale-110">
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="w-6 h-6 text-gray-700 dark:text-white transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-500 dark:text-white/70 group-hover:text-blue-600 dark:group-hover:text-white transition-all duration-300" />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {openItems.includes(item.id) && (
                <div className="px-8 pb-8 animate-fadeIn">
                  <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                    <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-2xl p-8">
                      <p className="text-gray-700 dark:text-white/90 leading-relaxed text-lg transition-colors duration-300">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;

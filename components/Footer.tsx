import { Zap, ExternalLink, Link2, GitBranch, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#contact" },
    { label: "Changelog", href: "#contact" },
  ],
  Industries: [
    { label: "Banking", href: "#industries" },
    { label: "E-Commerce", href: "#industries" },
    { label: "Telecom", href: "#industries" },
    { label: "Healthcare", href: "#industries" },
  ],
  Company: [
    { label: "About", href: "#contact" },
    { label: "Blog", href: "#contact" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#contact" },
    { label: "Terms of Service", href: "#contact" },
    { label: "Cookie Policy", href: "#contact" },
    { label: "GDPR", href: "#contact" },
  ],
};

const socials = [
  { icon: ExternalLink, href: "#contact", label: "Twitter" },
  { icon: Link2, href: "#contact", label: "LinkedIn" },
  { icon: GitBranch, href: "#contact", label: "GitHub" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[#080810]">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold gradient-text">Nova</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-[240px]">
              AI-powered lead generation and customer engagement for every digital touchpoint.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-violet-500/15 flex items-center justify-center text-gray-500 hover:text-violet-400 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Nova AI. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span>Built with intelligence, designed for growth</span>
            <span className="w-1 h-1 rounded-full bg-violet-500 mx-1" />
            <span className="gradient-text font-medium">Nova AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

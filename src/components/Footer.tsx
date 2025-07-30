import Link from "next/link";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

const quickLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
    { href: "/privacy", label: "Privacy Policy" },
];

const socialLinks = [
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
        href: "https://wa.me/917033297379",
        label: "WhatsApp",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        ),
      },
];

export function Footer() {
    return (
        <footer className="w-full border-t bg-card text-card-foreground">
            <div className="container px-4 md:px-6 py-12">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
                    <div className="flex flex-col items-start gap-4">
                        <Link href="/" className="flex items-center gap-2" prefetch={false}>
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground">
                            Your partner in academic excellence. We provide top-tier writing services to help you succeed.
                        </p>
                    </div>

                    <div className="grid gap-2">
                        <h4 className="font-semibold text-lg">Quick Links</h4>
                        <div className="grid gap-1">
                            {quickLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200" prefetch={false}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h4 className="font-semibold text-lg">Contact Us</h4>
                        <div className="grid gap-2">
                             <a href="mailto:karnkumar5522@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                karnkumar5522@gmail.com
                            </a>
                            <a href="tel:+917033297379" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                +91 7033297379
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    {social.icon}
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h4 className="font-semibold text-lg">Get Help Now</h4>
                        <p className="text-muted-foreground">
                            Have a question or a specific requirement? Get in touch with our team.
                        </p>
                        <Button asChild className="w-full sm:w-auto">
                            <Link href="/#cta">Submit Requirement</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bg-muted py-4 text-center text-sm text-muted-foreground">
                <div className="container">
                    © {new Date().getFullYear()} Thesis Writer. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

import { ContactForm } from "@/components/ContactForm";
import { ShieldCheck } from "lucide-react";

export function Cta() {
  return (
    <section id="cta" className="bg-muted/50 dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Ready to Excel?
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Submit your topic or requirements, and our team will get back to you with a free quote and consultation. Let&apos;s get started on your path to academic success.
            </p>
            <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                    Free, no-obligation quote
                </li>
                <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                    Confidential consultation
                </li>
                <li className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                    Expert guidance from day one
                </li>
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
}

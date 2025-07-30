export default function PrivacyPage() {
    return (
      <div className="bg-background">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  
              <h2>Introduction</h2>
              <p>
                Thesis Writer ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
  
              <h2>Information We Collect</h2>
              <p>
                We may collect personal information from you such as your name, email address, phone number, and academic details when you fill out our contact form or otherwise interact with our services.
              </p>
  
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our services.</li>
                <li>Communicate with you, including for customer service and to provide you with updates and other information relating to the website.</li>
                <li>Process your transactions and manage your orders.</li>
                <li>Improve our website and services.</li>
                <li>Prevent fraudulent activity.</li>
              </ul>
  
              <h2>Disclosure of Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
  
              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
  
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at help@thesiswriter.com.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
      question: "Is the writing service confidential?",
      answer: "Absolutely. We prioritize your privacy and confidentiality. All personal information and project details are securely handled and never shared with third parties."
    },
    {
      question: "How do you guarantee plagiarism-free work?",
      answer: "Every piece of work is written from scratch by our expert writers. We also use advanced plagiarism detection software to scan each document before delivery and provide a report for your assurance."
    },
    {
      question: "What if I need revisions?",
      answer: "We offer a revision policy to ensure your complete satisfaction. If the delivered work does not meet your initial requirements, we will make the necessary amendments free of charge."
    },
    {
      question: "Can you handle urgent deadlines?",
      answer: "Yes, we can accommodate urgent requests. Please specify your deadline when you submit your requirements, and we will do our best to deliver high-quality work on time."
    },
    {
        question: "What subjects and academic levels do you cover?",
        answer: "Our team consists of experts from a vast range of academic disciplines. We provide services for all levels, from undergraduate to Ph.D., across arts, sciences, business, law, and more."
    }
];

export function Faq() {
    return (
        <section id="faq">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Frequently Asked Questions</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                        Find answers to common questions about our services.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem value={`item-${index+1}`} key={index}>
                                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCopy, FileText, ShieldCheck, Clock, Infinity, GraduationCap } from "lucide-react";

const services = [
  {
    icon: <BookCopy className="w-8 h-8 text-primary" />,
    title: "Thesis Writing",
    description: "Comprehensive support for your thesis from proposal to final submission, ensuring academic rigor and quality."
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Synopsis Creation",
    description: "Craft a compelling and well-structured synopsis that effectively outlines your research project and objectives."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "Research Paper Help",
    description: "Expert assistance with research, writing, and formatting for high-impact research papers in any field."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Plagiarism-Free Guarantee",
    description: "We guarantee 100% original content, complete with plagiarism reports to ensure academic integrity."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Timely Delivery",
    description: "Your deadlines are our priority. We ensure prompt delivery of all projects without compromising on quality."
  },
  {
    icon: <Infinity className="w-8 h-8 text-primary" />,
    title: "Any Subject / Stream",
    description: "Our diverse team of experts covers a wide range of subjects and academic streams to meet your needs."
  }
]

export function Services() {
  return (
    <section id="services" className="bg-muted/50 dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Our Services</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We offer a comprehensive suite of academic services to support you at every stage of your research.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 mb-4">
                {service.icon}
              </CardHeader>
              <CardContent className="p-0 space-y-2">
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

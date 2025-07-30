'use client';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/lib/types";

const testimonials: Testimonial[] = [
    {
      quote: "Thesis Writer was a lifesaver for my master's thesis. The quality of work and attention to detail were exceptional. Highly recommended!",
      name: "Sarah L.",
      title: "M.Sc. Computer Science",
      image: "https://placehold.co/100x100.png",
    },
    {
      quote: "The team provided incredible support for my research paper. Their insights and timely delivery helped me secure a publication in a top journal.",
      name: "Michael B.",
      title: "Ph.D. Candidate, Physics",
      image: "https://placehold.co/100x100.png",
    },
    {
      quote: "I was struggling with my synopsis, but their writers crafted a perfect one that got approved in the first go. Thank you, Thesis Writer!",
      name: "Emily C.",
      title: "MBA Student",
      image: "https://placehold.co/100x100.png",
    },
    {
      quote: "The plagiarism-free guarantee gave me complete peace of mind. The final paper was original, well-researched, and exceeded my expectations.",
      name: "David H.",
      title: "B.A. History",
      image: "https://placehold.co/100x100.png",
    },
    {
      quote: "Fast, professional, and reliable. I've used their services for multiple assignments and they have never disappointed. A truly five-star service.",
      name: "Jessica P.",
      title: "Law Student",
      image: "https://placehold.co/100x100.png",
    },
    {
        quote: "The technical expertise for my mechanical engineering project was impressive. They understood the complexities and delivered a high-quality report.",
        name: "Rahul V.",
        title: "B.Tech Mechanical Engg.",
        image: "https://placehold.co/100x100.png",
    },
    {
        quote: "As a medical student, I needed help with a complex literature review. The team found relevant, up-to-date sources and structured the paper perfectly.",
        name: "Aisha K.",
        title: "MBBS Student",
        image: "https://placehold.co/100x100.png",
    },
    {
        quote: "My Ph.D. research in sociology required very specific theoretical framing. The writer assigned to me had a deep understanding of the subject. Excellent work!",
        name: "Dr. Priya Sharma",
        title: "Ph.D. Sociology",
        image: "https://placehold.co/100x100.png",
    },
    {
        quote: "The team helped me articulate my design philosophy for my final portfolio. Their creative input was invaluable and helped me present my work professionally.",
        name: "Priya Singh",
        title: "B.Des Fashion Design",
        image: "https://placehold.co/100x100.png",
    },
    {
        quote: "I got expert help with my econometric analysis. The statistician was incredibly knowledgeable and helped me interpret my data accurately for my thesis.",
        name: "Johnathan Chen",
        title: "M.A. Economics",
        image: "https://placehold.co/100x100.png",
    },
    {
        quote: "Juggling clinicals and coursework is tough. Thesis Writer helped me write a comprehensive case study, which saved me a lot of time and stress.",
        name: "Fatima Al-Sayed",
        title: "B.Sc. Nursing",
        image: "https://placehold.co/100x100.png",
    },
    {
        quote: "My research on renewable energy policies was complex, but their expert provided a fantastic literature review that set a strong foundation for my dissertation.",
        name: "Daniel Kim",
        title: "Ph.D. Environmental Science",
        image: "https://placehold.co/100x100.png",
    }
];


export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">What Our Students Say</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Real feedback from students who trusted us with their academic success.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4 h-full">
                      <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4 pt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person student" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LottiePlayer } from "@/components/LottiePlayer";
import { WhatsappIcon } from "@/components/WhatsappIcon";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)] md:min-h-[60vh] lg:min-h-[70vh]">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Get Expert Help with Thesis, Synopsis &amp; Research Papers
          </h1>
          <p className="max-w-[700px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
            Trusted by 1000+ students. Plagiarism-free, on-time delivery, and expert academic guidance across all subjects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg">
              <Link href="#cta">Get Help Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://wa.me/917033297379" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-6 w-6" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
            <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_puciaact.json" />
        </div>
      </div>
    </section>
  );
}

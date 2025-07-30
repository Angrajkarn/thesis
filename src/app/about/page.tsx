import { GraduationCap, Rocket, Target, Users, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 lg:py-40 bg-muted/30 dark:bg-card">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-1 lg:gap-16 items-center text-center lg:text-left">
                        <div className="space-y-4">
                            <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">About Us</span>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                                Your Partner in Academic Excellence
                            </h1>
                            <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl/relaxed">
                                We are a dedicated team of academic professionals passionate about helping students achieve their goals. Our mission is to provide high-quality, ethical, and reliable academic support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="w-full py-20 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                        <div className="space-y-4 text-center lg:text-left">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                               <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To empower students by providing exceptional academic writing and research support, fostering learning and enabling them to achieve their full academic potential with integrity.
                            </p>
                        </div>
                        <div className="space-y-4 text-center lg:text-left">
                           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Our Vision</h3>
                            <p className="text-muted-foreground">
                                To be the most trusted and respected academic assistance service globally, known for our commitment to quality, originality, and student success.
                            </p>
                        </div>
                        <div className="space-y-4 text-center lg:text-left">
                             <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                                 <GraduationCap className="w-6 h-6" />
                             </div>
                            <h3 className="text-2xl font-bold">Our Experience</h3>
                            <p className="text-muted-foreground">
                                With over a decade of combined experience, our team comprises seasoned academics, researchers, and writers from diverse fields, ensuring expert handling of any subject.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="w-full py-20 md:py-24 lg:py-32 bg-muted/50 dark:bg-card">
                 <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Choose Thesis Writer?</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We are committed to providing the best possible service and support to our clients.
                        </p>
                    </div>
                     <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
                         <div className="grid gap-2">
                            <Users className="w-8 h-8 text-primary" />
                             <h3 className="text-xl font-bold">Expert Team</h3>
                             <p className="text-muted-foreground">
                                Our writers are PhDs, researchers, and professors from top universities.
                             </p>
                         </div>
                         <div className="grid gap-2">
                             <Zap className="w-8 h-8 text-primary" />
                             <h3 className="text-xl font-bold">Quality First</h3>
                             <p className="text-muted-foreground">
                                We uphold the highest standards of academic integrity and quality in every project.
                             </p>
                         </div>
                         <div className="grid gap-2">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                             <h3 className="text-xl font-bold">Confidential & Secure</h3>
                             <p className="text-muted-foreground">
                                Your privacy is paramount. All interactions and data are fully confidential.
                             </p>
                         </div>
                     </div>
                 </div>
            </section>

        </div>
    )
}

import { Award, Check, GraduationCap, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingTiers = [
    {
        level: "Undergraduate",
        price: 2000,
        icon: <GraduationCap className="w-10 h-10 text-primary" />,
        features: [
            "Assignment Help",
            "Essay Writing",
            "Project Reports",
            "Plagiarism Check"
        ],
        cta: "Get Started"
    },
    {
        level: "Master's",
        price: 2500,
        icon: <Star className="w-10 h-10 text-primary" />,
        features: [
            "Thesis/Dissertation Proposal",
            "Literature Review",
            "Data Analysis Help",
            "Journal Paper Writing"
        ],
        popular: true,
        cta: "Choose Master's"
    },
    {
        level: "Ph.D.",
        price: 3000,
        icon: <Award className="w-10 h-10 text-primary" />,
        features: [
            "Complete Thesis Writing",
            "Research Gap Analysis",
            "Statistical Help (SPSS, etc.)",
            "Publication Support"
        ],
        cta: "Go for Ph.D."
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Transparent Pricing
                    </h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                        Affordable, high-quality academic support tailored to your level. All prices are a starting point.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <Card key={tier.level} className={`flex flex-col ${tier.popular ? 'border-primary border-2 shadow-lg relative' : ''}`}>
                            {tier.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">POPULAR</div>}
                            <CardHeader className="items-center text-center">
                                {tier.icon}
                                <CardTitle className="text-2xl font-bold">{tier.level}</CardTitle>
                                <CardDescription>
                                    <span className="text-4xl font-bold text-foreground">₹{tier.price.toLocaleString('en-IN')}</span>
                                    <span className="text-muted-foreground"> /starting from</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="w-5 h-5 text-green-500 mr-2" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
                                    <Link href="#cta">{tier.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

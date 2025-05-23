import { Code, Globe, Mail, MessageSquare, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"

const Link = ({ href, children, className }: { href: string; children: React.ReactNode; className: string }) => {
    return <a href={href} className={className}>{children}</a>
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col px-10 w-full">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between w-full max-w-none px-0">
          <div className="flex items-center gap-2 font-bold text-xl">
            <img src="/logo.png" alt="Techgrity Logo" className="h-16" />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            {/* <Link href="#work" className="text-sm font-medium transition-colors hover:text-primary">
              Our Work
            </Link> */}
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 contents">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Innovative Software Solutions from Thailand
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We build cutting-edge software that drives business growth and enhances user experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button> */}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-200 to-blue-300 opacity-20 blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-xl bg-gradient-to-br from-teal-400 to-blue-600 shadow-xl"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  We provide comprehensive software solutions tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm w-full">
                <div className="rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-center text-muted-foreground">
                  Custom websites and web applications built with the latest technologies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm w-full">
                <div className="rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-3">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Mobile Apps</h3>
                <p className="text-center text-muted-foreground">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm w-full">
                <div className="rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Custom Software</h3>
                <p className="text-center text-muted-foreground">
                  Bespoke software solutions designed to solve your specific business challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 w-full">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Who We Are</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Techgrity is a Thai software house founded on the principles of technical excellence and integrity.
                    We combine innovative technology with creative solutions to help businesses thrive in the digital
                    age.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver high-quality software solutions that empower businesses to achieve their goals and exceed
                    their expectations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be recognized as a leading software development company in Thailand and Southeast Asia, known for
                    our innovation, reliability, and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-4 text-center">
                      <div className="text-7xl font-bold text-primary">5+</div>
                      <div className="text-xl font-medium">Years of Experience</div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 space-y-2">
                    <div className="text-4xl font-bold">10+</div>
                    <div className="text-lg">Projects Completed</div>
                  </div>
                  <div className="absolute bottom-6 right-6 space-y-2 text-right">
                    <div className="text-4xl font-bold">10+</div>
                    <div className="text-lg">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Recent Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent projects that showcase our expertise and capabilities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-video bg-muted/70"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="text-xl font-bold text-white">Project {item}</h3>
                    <p className="text-white/80">Web Application</p>
                    <Button
                      variant="outline"
                      className="mt-4 bg-transparent text-white hover:bg-white hover:text-black"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? We'd love to hear from you. Reach out to us and let's create something amazing
                  together.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-6 py-12">
              <div className="flex items-center justify-center space-x-4">
                <div className="rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <a href="mailto:techgrity.app@gmail.com" className="text-lg font-medium hover:underline">
                  techgrity.app@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-3">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-medium">Let's discuss your project</div>
              </div>
              {/* <div className="flex flex-col space-y-4 rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Send us a message</h3>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600">Send Message</Button>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <img src="/logo.png" alt="Techgrity Logo" className="h-16" />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Techgrity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </footer>
    </div>
  )
}

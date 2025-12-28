"use client"

import type React from "react"

import { Suspense } from "react"
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ")
}

// Custom UI Components replacing shadcn/ui to ensure ZERO external dependencies
const CustomButton = ({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline" | "secondary"
  size?: "default" | "lg" | "sm"
}) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    ghost: "hover:bg-secondary text-foreground",
    outline: "border border-border bg-transparent hover:bg-secondary text-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-14 px-8",
    sm: "h-8 px-3 text-xs",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const CustomInput = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={cn(
      "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
)

const CustomBadge = ({
  children,
  className,
  variant = "default",
}: { children: React.ReactNode; className?: string; variant?: "default" | "secondary" | "outline" }) => {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border text-foreground",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

const Icons = {
  Twitter: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="24" height="24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Search: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width="24"
      height="24"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Share2: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width="24"
      height="24"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
  BookOpen: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width="24"
      height="24"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  ChevronRight: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width="24"
      height="24"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  Activity: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width="24"
      height="24"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
}

function LandingContent() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground font-bold px-2.5 py-1 rounded text-lg">X</div>
            <span className="text-xl font-bold tracking-tight">pedia</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#preview" className="hover:text-foreground transition-colors">
              How it works
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Follow on X
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center max-w-4xl">
          <CustomBadge
            variant="secondary"
            className="mb-6 rounded-full px-4 py-1.5 border border-border bg-secondary/50"
          >
            <span className="mr-2">✨</span> Turn anyone on X into their own Wikipedia page
          </CustomBadge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance leading-[1.1]">
            The Encyclopedia of <span className="text-muted-foreground/60 italic">the Timeline</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Xpedia analyzes the last 200 tweets to create a clean, structured profile that reads like a real
            encyclopedia entry, automatically generated from their own content.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-16">
            <CustomButton
              size="lg"
              className="w-full sm:w-auto rounded-full px-12 h-14 font-bold text-lg"
              onClick={() => document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })}
            >
              See the Concept
            </CustomButton>
          </div>

          <div className="pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-left">
              <div className="text-2xl font-bold">200</div>
              <p className="text-sm text-muted-foreground">Tweets Analyzed</p>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">LLM</div>
              <p className="text-sm text-muted-foreground">Contextual Summary</p>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">Pure</div>
              <p className="text-sm text-muted-foreground">Wiki-Style Layout</p>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">Free</div>
              <p className="text-sm text-muted-foreground">Community Driven</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden shadow-sm">
            {[
              {
                icon: <Icons.Twitter />,
                title: "Fetch Tweets",
                desc: "Instantly pull the last 200 tweets to analyze behavior and frequency.",
              },
              {
                icon: <Icons.Search />,
                title: "Analyze Content",
                desc: "Summarize activity, topics, tone, and personality using advanced AI.",
              },
              {
                icon: <Icons.BookOpen />,
                title: "Wiki Profile",
                desc: "Generate sections like Bio, Topics, Key Insights, and Activity Overview.",
              },
              {
                icon: <Icons.Share2 />,
                title: "Shareable Link",
                desc: "Each entry gets a unique, shareable URL that looks like a real encyclopedia.",
              },
            ].map((f, i) => (
              <div key={i} className="bg-background p-8 hover:bg-secondary/10 transition-colors">
                <div className="mb-6 p-3 bg-secondary/50 rounded-xl w-fit text-primary border border-border/50">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preview Section */}
        <section id="preview" className="container mx-auto px-6 pt-32 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Structured Digital Legacy</h2>
            <p className="text-muted-foreground">
              Clean, objective, and encyclopedic summaries of your online presence.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-transform hover:scale-[1.01] duration-500">
            <div className="bg-secondary/40 border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-amber-500/30" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
              </div>
              <div className="text-[10px] text-muted-foreground font-mono bg-background px-3 py-1 rounded border border-border">
                xpedia.vercel.app/levelsio
              </div>
              <div className="w-6 h-6" />
            </div>
            <div className="p-8 md:p-14 bg-white/[0.02]">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 min-w-0">
                  <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 pb-3 border-b border-border text-foreground/90">
                    Pieter Levels
                  </h1>
                  <p className="text-sm leading-relaxed mb-6 italic text-muted-foreground">
                    From Xpedia, the timeline encyclopedia
                  </p>

                  <p className="leading-relaxed mb-8 text-foreground/80 text-lg">
                    <span className="font-bold">Pieter Levels</span> (born 1986), better known by his handle{" "}
                    <span className="font-bold text-primary">@levelsio</span>, is a Dutch independent entrepreneur and
                    digital nomad. Based on his recent 200 tweets, his discourse is heavily focused on{" "}
                    <span className="text-primary hover:underline cursor-pointer">Artificial Intelligence</span>,
                    automated image generation, and the{" "}
                    <span className="text-primary hover:underline cursor-pointer">indie hacker</span> movement.
                  </p>

                  <div className="bg-secondary/20 border border-border p-5 rounded-xl w-full max-w-sm mb-10 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-widest mb-4 text-muted-foreground">
                      Contents
                    </div>
                    <ul className="text-sm space-y-2.5">
                      {[
                        "1. Bio / Who they are",
                        "2. Popular topics / categories",
                        "3. Key insights or quotes",
                        "4. Activity overview",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-primary/80 hover:text-primary cursor-pointer group"
                        >
                          <span className="text-muted-foreground/40 font-mono text-xs">{idx + 1}</span>
                          <span className="group-hover:underline">{item.split(". ")[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h2 className="text-2xl font-serif font-medium mb-5 pb-2 border-b border-border text-foreground/90 flex items-center gap-3">
                    Popular Topics
                  </h2>
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {["#AI", "#IndieHackers", "#DigitalNomad", "#Automation", "#Bootstrapping"].map((tag) => (
                      <CustomBadge
                        key={tag}
                        variant="outline"
                        className="px-3 py-1 text-sm bg-secondary/30 hover:bg-secondary/60 cursor-pointer transition-colors border-border/50"
                      >
                        {tag}
                      </CustomBadge>
                    ))}
                  </div>

                  <h2 className="text-2xl font-serif font-medium mb-5 pb-2 border-b border-border text-foreground/90">
                    Activity Overview
                  </h2>
                  <div className="bg-secondary/10 border border-border rounded-xl p-6 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Vibe Score</p>
                      <p className="text-xl font-bold">94 / 100 — Relentless</p>
                    </div>
                    <Icons.Activity className="w-12 h-12 text-primary opacity-50" />
                  </div>
                </div>

                <div className="w-full md:w-80 shrink-0">
                  <div className="border border-border p-5 bg-secondary/10 rounded-xl shadow-lg">
                    <div className="aspect-square bg-background rounded-lg mb-5 flex items-center justify-center border border-border relative group overflow-hidden">
                      <Icons.Twitter className="w-20 h-20 text-muted-foreground/10 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <span className="absolute bottom-4 left-4 font-bold text-sm">@levelsio</span>
                    </div>
                    <table className="w-full text-sm border-collapse">
                      <tbody>
                        {[
                          ["Username", "@levelsio"],
                          ["Primary Topic", "AI"],
                          ["Activity", "High"],
                          ["Tone", "Minimalist"],
                          ["Last Update", "2 mins ago"],
                        ].map(([key, val], i) => (
                          <tr key={i} className="border-b border-border/40 last:border-0">
                            <th className="py-3 text-left font-bold text-muted-foreground pr-4">{key}</th>
                            <td className="py-3 text-right text-foreground/90">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 pt-40 pb-20 text-center">
          <div className="bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-24 relative overflow-hidden group shadow-2xl">
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
              <Icons.Twitter className="w-[300px] h-[300px]" />
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
              Turn your X timeline into history.
            </h2>
            <p className="text-lg md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto font-medium">
              Join thousands of creators who have archived their digital presence in a beautiful, structured format.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <CustomButton
                variant="secondary"
                size="lg"
                className="rounded-full px-12 h-16 text-xl font-extrabold shadow-xl"
              >
                Get Xpedia-fied
              </CustomButton>
              <CustomButton
                variant="outline"
                size="lg"
                className="rounded-full px-12 h-16 text-xl font-extrabold bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                View Gallery
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default function LandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <LandingContent />
    </Suspense>
  )
}

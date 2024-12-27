import React from "react"
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      href: "https://www.linkedin.com/in/maksymsyagrovskyy",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:maksymsyagrovskyy@gmail.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://github.com/UfozDelta",
      icon: Github,
      label: "GitHub",
    },
  ]

  return (
    <footer className="w-full">
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className="bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maksym Syagrovskyy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


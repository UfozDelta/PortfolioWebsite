import React from 'react'
import { ExternalLink, Check } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectItemProps {
  title: string
  description: string
  link: string
  features: string[]
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, link, features }) => {
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-0.5">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}


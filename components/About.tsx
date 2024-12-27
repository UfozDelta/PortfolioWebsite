'use client'

import React from 'react'
import { Code, Database, LineChart, Binary, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const About = () => {
  const skills = [
    {
      icon: Binary,
      title: "Machine Learning Projects",
      description: "Building practical ML applications to solve real-world problems"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Experienced in designing and implementing robust backend systems and APIs"
    },
    {
      icon: LineChart,
      title: "Quantitative Finance",
      description: "Implementing data analysis systems for financial market insights"
    },
    {
      icon: Code,
      title: "Data Visualization",
      description: "Creating interactive dashboards that transform complex data into clear insights"
    }
  ]

  return (
    <div className="container mx-auto py-12 px-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">
          Building Systems at the Intersection of Data & Code
        </h1>
      </div>
      
      <Card className="bg-secondary/50">
        <CardContent className="pt-6">
          <p className="text-lg text-center leading-relaxed">
            Hi! I'm Maksym Syagrovskyy, a second-year Computer Science student at the University of Toronto 
            with hands-on experience in building data-driven systems and applications.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-0.5">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <skill.icon className="w-8 h-8 text-primary" />
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed">
            While pursuing my degree, I've developed a passion for solving complex problems through code. 
            From implementing machine learning algorithms and building robust backend systems to creating data visualization tools,
            this portfolio showcases my projects across various fields. I continue to explore new technologies and enhance my skills
            in machine learning, finance, backend development, and data visualization.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


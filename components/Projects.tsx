import React from 'react'
import { ProjectItem } from './ProjectItem'

const projects = [
  {
    title: "EdiGen",
    description: 'Program that creates short-form content from long-form videos using machine learning',
    link: "https://github.com/UfozDelta/WindowsTalk",
    features: [
      "AI-powered video summarization",
      "Automatic content extraction",
      "Customizable output formats",
      "Integration with popular video platforms"
    ]
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive tool for managing personal and business expenses",
    link: "https://github.com/UfozDelta/WindowsTalk",
    features: [
      "Real-time expense logging",
      "Categorization and tagging",
      "Budget planning and alerts",
      "Detailed financial reports and insights"
    ]
  },
  {
    title: "Trading Terminal",
    description: "Streamlined trade execution platform for efficient market operations",
    link: "https://github.com/UfozDelta/WindowsTalk",
    features: [
      "One-click trade execution",
      "Real-time market data integration",
      "Customizable trading strategies",
      "Risk management tools"
    ]
  },
  {
    title: "Trading Dashboard",
    description: "Comprehensive data aggregation tool for optimal decision-making in dynamic markets",
    link: "https://github.com/UfozDelta/WindowsTalk",
    features: [
      "Multi-asset class support",
      "Advanced charting and technical analysis",
      "News and sentiment analysis",
      "Portfolio performance tracking"
    ]
  },
  {
    title: "UofT Credit Explorer",
    description: "Tool for optimizing course selection based on interests and graduation timeline",
    link: "https://github.com/UfozDelta/WindowsTalk",
    features: [
      "Personalized course recommendations",
      "Graduation requirement tracking",
      "Schedule optimization",
      "Course difficulty and workload estimates"
    ]
  },
  {
    title: "TTC News and Bus Tracker",
    description: "Real-time TTC bus tracking and transit news for efficient commuting",
    link: "https://github.com/UfozDelta/WindowsTalk",
    features: [
      "Live bus arrival predictions",
      "Service disruption alerts",
      "Optimal route suggestions",
      "Crowd-sourced transit updates"
    ]
  }
]

export const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Current and Ongoing Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            features={project.features}
          />
        ))}
      </div>
    </div>
  )
}


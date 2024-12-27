'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export const Header = () => {
    const pathname = usePathname()

    const navItems = [
        { href: '#About', label: 'About' },
        { href: '#Projects', label: 'Projects' },
        { href: '#Contact', label: 'Contact' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl">
                            Portfolio
                        </span>
                    </Link>
                    <nav>
                        <ul className="flex items-center">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Button
                                        variant="ghost"
                                        size="lg"
                                        asChild
                                        className="hover:bg-black hover:text-white transition-colors"
                                    >
                                        <Link
                                            href={item.href}
                                            className={pathname === item.href ? "text-foreground" : "text-foreground/60"}
                                        >
                                            {item.label}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


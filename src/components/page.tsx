'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Page() {
  const handleContact = () => {
    window.location.href = "mailto:yassineramy01@gmail.com";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-lg">Mon Portfolio</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bonjour, je suis Yassine Ramy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Développeur web passionné par la création d&apos;expériences numériques exceptionnelles.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Voir mes projets</Button>
                <Button variant="outline" onClick={handleContact}>Me contacter</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Mes Projets
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <Card key={project}>
                  <CardHeader>
                    <CardTitle>Projet {project}</CardTitle>
                    <CardDescription>Description courte du projet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Projet ${project}`}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Technologies utilisées : React, Next.js, TailwindCSS
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 [Votre Nom]. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </nav>
      </footer>
    </div>
  )
}
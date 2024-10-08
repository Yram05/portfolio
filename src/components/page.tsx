'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-lg">Portfolio de Yassine RAMY</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experience">
            Expérience
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#education">
            Éducation
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projets
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Yassine RAMY
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Étudiant du MSc Analytics/Business à l'École Gamma, en recherche d'alternance pour novembre 2023/janvier 2024
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rythme d'alternance : 4 jours par semaine en entreprise, le mercredi en classe
                </p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  +33 6 20 33 52 73
                </Button>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  yramy@ecole-gamma.com
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Expérience Professionnelle
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Cyclamen</CardTitle>
                  <CardDescription>Stagiaire assistant data analyst (Mai-Oct. 2023)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Extraction et nettoyage de données brutes d'une machine de production d'aluminium</li>
                    <li>Traitement et analyse de données avec Power BI</li>
                    <li>Création de dashboards interactifs pour la visualisation des données de productions (KPI) et l'analyse des performances de production</li>
                    <li>Contribution à la prise de décision en exploitant les informations recueillies à partir des données</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lactalis</CardTitle>
                  <CardDescription>Stagiaire assistant chef de production (Avril-Sept. 2022)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Rédaction d'un cahier des charges détaillé pour un projet de changement de supervision</li>
                    <li>Analyse approfondie du processus de supervision existants, identification des lacunes et des opportunités d'amélioration pour monter en performance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>OCP (leader Mondial d'exportation de phosphate)</CardTitle>
                  <CardDescription>Stagiaire assistant ingénieur process (Juin-Août 2020)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Dissolution des dépôts de matière au niveau des cuves où ont lieu les réactions chimiques</li>
                    <li>Étude sur les acides les plus performant pour la dissolution de ces dépôts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Éducation
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>École Gamma, Paris 10</CardTitle>
                  <CardDescription>MSc Analytics for Business (2023-2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Cours principaux :</p>
                  <p>Récolte, visualisation et analyse de données, Code, Stratégie, Finance, Marketing</p>
                  <p className="font-semibold mt-2">Langages et outils :</p>
                  <p>Python, SQL, Power BI, Salesforce, Google Analytics, Dataiku, Tableau</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Université Aix Marseille</CardTitle>
                  <CardDescription>Master 2 génie des procédés option nucléaire (2020-2023)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Cours principaux :</p>
                  <p>Opération unitaire, modélisation et simulation industrielle, bilan de matière, thermodynamique</p>
                  <p className="font-semibold mt-2">Langages et outils :</p>
                  <p>Python, Excel, PowerPoint, Power BI, ProSim, Aspen Plus</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lycée Mohamed V, Casablanca</CardTitle>
                  <CardDescription>Baccalauréat, Physique Chimie, Mention Très Bien (2016)</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Projets
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Boutique en ligne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Création d'une boutique en ligne, gestion du marketing et de la publicité, gestion des stocks et de l'envoi de colis (E-commerce)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ChatBot AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Création d'un ChatBot SMS qui permet d'automatiser la prise de rendez-vous pour les prospects générés par les business avec un CRM, Zappier et ChatGPT 4</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Compétences et Langues
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Langues</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>Français – Natif</li>
                    <li>Anglais – Bilingue</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Centres d'intérêt</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>Football</li>
                    <li>Surf</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Yassine RAMY. Tous droits réservés.</p>
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
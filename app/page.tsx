"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-20%" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function WeddingInvitation() {
  useEffect(() => {
    // Prevent horizontal scroll
    document.body.style.overflowX = "hidden"
  }, [])

  return (
    <div className="min-h-screen bg-background snap-container overflow-y-scroll overflow-x-hidden">
      {/* Section 1: Welcome */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="text-center max-w-md mx-auto">
          <motion.h1
            variants={fadeInScale}
            className="khmer-text text-4xl md:text-5xl font-bold text-foreground mb-8 leading-relaxed"
          >
            សិរីមង្គលអាពាហ៍ពិពាហ៍
         
          </motion.h1>
          <motion.p variants={fadeInUp} className="khmer-text text-2xl md:text-3xl text-foreground/90">
            សូមគោរពអញ្ជើញ
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Section 2: Date */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="text-center max-w-md mx-auto">
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <p className="khmer-text text-3xl md:text-4xl font-bold text-foreground mb-2">ថ្ងៃ ទី ខែ ឆ្នាំ២០២៦</p>
              <p className="khmer-text text-2xl md:text-3xl text-foreground/90">12th February 2026</p>
              <p className="khmer-text text-2xl md:text-3xl text-foreground/90">Location</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

        {/* Section 4: Photo/Image Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="max-w-md w-full">
          <motion.div variants={fadeInScale} className="space-y-6">
          <div className="flex items-center justify-center gap-4">
                <p className="khmer-text text-lg md:text-xl text-foreground">កូនប្រុស</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">តែ ច័ន្ទរនតៈ</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <p className="khmer-text text-lg md:text-xl text-foreground">កូនស្រី</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">នាត ម៉ីលីម</p>
              </div>
            <div className="aspect-[3/4] bg-card rounded-lg shadow-2xl flex items-center justify-center">
              <p className="text-card-foreground/30 font-sans text-sm">Wedding Photo</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 3: Bride and Groom Names */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="text-center max-w-md mx-auto w-full">
          <motion.div variants={fadeInUp} className="space-y-12">
            {/* Parents Names */}
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <p className="khmer-text text-lg md:text-xl text-foreground">លោក</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">ឈី ចិន្តនា:</p>
                <p className="khmer-text text-lg md:text-xl text-foreground">លោក</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">ឈាន ជីលីង</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <p className="khmer-text text-lg md:text-xl text-foreground">លោកស្រី</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">ឈី ចិន្តនា:</p>
                <p className="khmer-text text-lg md:text-xl text-foreground">លោកស្រី</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">ឈាន ជីលីង</p>
              </div>
            </motion.div>

            {/* Invitation Text */}
            <motion.div variants={fadeInScale} className="px-4">
              <p className="khmer-text text-base md:text-lg text-foreground leading-relaxed">
                មានកិត្តិយស លោកលោកស្រី លោកកញ្ញា លោកបង លោកប្អូន អ្នកនាងកញ្ញា អ្នកនាងប្អូន អញ្ជើញចូលរួមជាមួយជាមួយនឹងគ្រួសារយើងខ្ញុំ
                ក្នុងពិធីមង្គលការរបស់កូនៗ ក្នុងថ្ងៃនិងម៉ោងដូចខាងក្រោម គុណសូមសូត្រស្តី លោកលោកស្រី លោកកញ្ញា លោកបង លោកប្អូន
              </p>
            </motion.div>

            {/* Children Names */}
            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <p className="khmer-text text-lg md:text-xl text-foreground">កូនប្រុស</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">តែ ច័ន្ទរនតៈ</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <p className="khmer-text text-lg md:text-xl text-foreground">កូនស្រី</p>
                <p className="khmer-text text-2xl md:text-3xl font-bold text-foreground">នាត ម៉ីលីម</p>
              </div>
              <p className="khmer-text text-xl md:text-2xl text-foreground mt-6">ថ្ងៃ ២៥ ខែ មេសា ២០២៥</p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 5: Invitation Card - English Version */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="max-w-md w-full">
          <motion.div variants={fadeInUp}>
            <Card className="bg-card shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <motion.div variants={fadeInUp} className="space-y-4">
                    <div>
                      <p className="font-sans text-sm uppercase tracking-wider text-card-foreground/70">Parents</p>
                      <p className="font-sans text-xl font-semibold text-card-foreground">Mr. TE BUMNOV</p>
                      <p className="font-sans text-xl font-semibold text-card-foreground">Mrs. BO SIEMLA</p>
                    </div>
                    <div className="py-4">
                      <p className="font-sans text-base text-card-foreground/80 leading-relaxed">
                        REQUEST THE PLEASURE OF YOUR PRESENCE AT THE WEDDING OF OUR CHILDREN
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-sm uppercase tracking-wider text-card-foreground/70">Children</p>
                      <p className="font-sans text-xl font-semibold text-card-foreground">TE CHANRATANAK</p>
                      <p className="font-sans text-xl font-semibold text-card-foreground">MEILIN</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 6: Wedding Details */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="text-center max-w-md mx-auto">
          <motion.div variants={fadeInUp} className="space-y-8">
            <motion.h2 variants={fadeInScale} className="khmer-text text-3xl md:text-4xl font-bold text-foreground">
              ព័ត៌មានលម្អិត
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <p className="khmer-text text-lg text-foreground/80 mb-2">ថ្ងៃ</p>
                <p className="khmer-text text-2xl font-bold text-foreground">ថ្ងៃ ២៥ ខែ មេសា ឆ្នាំ ២០២៥</p>
              </div>
              <div>
                <p className="khmer-text text-lg text-foreground/80 mb-2">ម៉ោង</p>
                <p className="khmer-text text-2xl font-bold text-foreground">ម៉ោង ៦:០០ ល្ងាច</p>
              </div>
              <div>
                <p className="khmer-text text-lg text-foreground/80 mb-2">ទីតាំង</p>
                <p className="khmer-text text-xl font-bold text-foreground">សាលពិធីមង្គលការ</p>
                <p className="khmer-text text-base text-foreground/80">ភ្នំពេញ កម្ពុជា</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 7: Thank You - Khmer */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="text-center max-w-md mx-auto">
          <motion.div variants={fadeInScale} className="space-y-8">
            <h2 className="khmer-text text-3xl md:text-4xl font-bold text-foreground leading-relaxed">សូមអរគុណជាពិសេស</h2>
            <motion.p variants={fadeInUp} className="khmer-text text-lg md:text-xl text-foreground/90 leading-relaxed">
              សូមអរគុណចំពោះការមកចូលរួម និងគាំទ្ររបស់លោកអ្នក។ ការមានវត្តមានរបស់លោកអ្នកនឹងធ្វើឱ្យថ្ងៃពិសេសនេះកាន់តែមានអត្ថន័យ។
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 8: Gallery */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="max-w-md w-full">
          <motion.div variants={fadeInUp} className="space-y-8">
            <motion.h2
              variants={fadeInScale}
              className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center"
            >
              Our Journey
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  variants={fadeInScale}
                  className="aspect-square bg-card rounded-lg shadow-lg flex items-center justify-center"
                >
                  <p className="text-card-foreground/30 font-sans text-sm">Photo {i}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 9: Location & Footer */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 snap-section">
        <AnimatedSection className="max-w-md w-full">
          <motion.div variants={fadeInUp} className="space-y-8">
            <motion.div variants={fadeInScale} className="text-center">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-2">Location</h2>
              <p className="khmer-text text-2xl text-foreground">ទីតាំង</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="bg-card shadow-2xl">
                <CardContent className="p-8">
                  <div className="aspect-video bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-card-foreground/50 font-sans">Map View</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="font-sans text-lg font-semibold text-card-foreground">Wedding Venue</p>
                    <p className="khmer-text text-base text-card-foreground/80">សាលពិធីមង្គលការ</p>
                    <p className="font-sans text-sm text-card-foreground/70">Phnom Penh, Cambodia</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInScale} className="text-center space-y-4 pt-8">
              <p className="font-sans text-lg text-foreground">With love</p>
              <p className="khmer-text text-xl font-semibold text-foreground">ចន្រតនៈ & មីលីន</p>
              <p className="font-sans text-lg font-semibold text-foreground">Chanratanak & Meilin</p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  )
}

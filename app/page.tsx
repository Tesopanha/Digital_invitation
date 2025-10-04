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
    <div className="min-h-screen w-full max-w-full bg-pink-200 snap-container overflow-y-scroll overflow-x-hidden m-0 p-0">
      {/* Section 1: Welcome */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="text-center w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.h1
            variants={fadeInScale}
            className="khmer-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-relaxed"
          >
            សិរីមង្គលអាពាហ៍ពិពាហ៍
         
          </motion.h1>
          <motion.p variants={fadeInUp} className="khmer-text text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90">
            សូមគោរពអញ្ជើញ
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Section 2: Date */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="text-center w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8">
            <div>
              <p className="khmer-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">ថ្ងៃ ទី ខែ ឆ្នាំ២០២៦</p>
              <p className="khmer-text text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90">12th February 2026</p>
              <p className="khmer-text text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90">Location</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

        {/* Section 3: Photo/Image Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div variants={fadeInScale} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full items-center">
              <div className="text-center space-y-1 sm:space-y-2">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">កូនប្រុសនាម</p>
                <p className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">តែ ច័ន្ទរនតៈ</p>
              </div>
              <div className="text-center">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">ជាគូនិង</p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">កូនស្រីនាម</p>
                <p className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">នាត ម៉ីលីម</p>
              </div>
            </div>
            <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-card rounded-lg shadow-2xl flex items-center justify-center max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <p className="text-card-foreground/30 font-sans text-xs sm:text-sm">Wedding Photo</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 4: Bride and Groom Names */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div variants={fadeInUp} className="space-y-8 sm:space-y-12">
            {/* Parents Names */}
            <motion.div variants={fadeInLeft} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
                <div className="text-left space-y-2">
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោក</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">តែ ច័ន្ទរនតៈ</p>
                  </div>
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោកស្រី</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">តែ ចិន្តនា:</p>
                  </div>
                </div>
                <div className="text-left space-y-2">
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោក</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">នាត ថុីលីម</p>
                  </div>
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោកស្រី</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">នាត ម៉ីលីម</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Invitation Text */}
            <motion.div variants={fadeInScale} className="px-2 sm:px-4 space-y-3 sm:space-y-4">
              <h3 className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground text-center">
              មានកិតិ្តយសសូមគោរពអញ្ជើញ
              </h3>
              <p className="khmer-text text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-center">
                ឯកឧត្តម លោកឧកញ៉ា​ លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរូមជាអធិបតីនិងជាភ្ញៀវ 
              កិត្តិយសដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តីជ័យមង្គល ក្នុង ពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុសកូនស្រី របស់យើងខ្ញុំ
              </p>
            </motion.div>

            {/* Children Names */}
            <motion.div variants={fadeInRight} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full items-center">
              <div className="text-center space-y-1 sm:space-y-2">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">កូនប្រុសនាម</p>
                <p className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">តែ ច័ន្ទរនតៈ</p>
              </div>
              <div className="text-center">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">ជាគូនិង</p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">កូនស្រីនាម</p>
                <p className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">នាត ម៉ីលីម</p>
              </div>
            </div>
              <div className="text-center">
                <p className="khmer-text text-lg sm:text-xl md:text-2xl text-foreground">ថ្ងៃទី ១២ ខែ ឧសភា ២០២៦</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 5: Invitation Card - English Version */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="w-full max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8 px-2 sm:px-4">
            {/* Parents Names */}
            <motion.div variants={fadeInLeft} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
                <div className="text-left space-y-2">
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground">Mr. TE BUMNOV</p>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground">Mrs. BO SIEMLA</p>
                </div>
                <div className="text-left space-y-2">
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground">Mr.</p>
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground">MRS.</p>
                </div>
              </div>
            </motion.div>

            {/* Invitation Text */}
            <motion.div variants={fadeInScale} className="px-2 sm:px-4">
              <p className="font-sans text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-center">
                REQUEST THE PLEASURE OF YOUR PRESENCE ON THE AUSPICIOUS OF THE WEDDING OF OUR CHILDREN
              </p>
            </motion.div>

            {/* Children Names */}
            <motion.div variants={fadeInRight} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                <div className="text-center">
                  <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">TE CHANRATANAK</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">MEILIN</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-sans text-sm sm:text-base md:text-lg text-foreground">WHICH WILL BE HELD ON</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 6: Wedding Details */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="text-center w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div variants={fadeInUp} className="space-y-8">
            <motion.h2 variants={fadeInScale} className="khmer-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              ព័ត៌មានលម្អិត
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
              <div>
                <p className="khmer-text text-sm sm:text-base md:text-lg text-foreground/80 mb-2">ថ្ងៃ</p>
                <p className="khmer-text text-lg sm:text-xl md:text-2xl font-bold text-foreground">ថ្ងៃ ២៥ ខែ មេសា ឆ្នាំ ២០២៥</p>
              </div>
              <div>
                <p className="khmer-text text-sm sm:text-base md:text-lg text-foreground/80 mb-2">ម៉ោង</p>
                <p className="khmer-text text-lg sm:text-xl md:text-2xl font-bold text-foreground">ម៉ោង ៦:០០ ល្ងាច</p>
              </div>
              <div>
                <p className="khmer-text text-sm sm:text-base md:text-lg text-foreground/80 mb-2">ទីតាំង</p>
                <p className="khmer-text text-base sm:text-lg md:text-xl font-bold text-foreground">សាលពិធីមង្គលការ</p>
                <p className="khmer-text text-sm sm:text-base text-foreground/80">ភ្នំពេញ កម្ពុជា</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 7: Thank You - Khmer */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="text-center w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div variants={fadeInScale} className="space-y-8">
            <h2 className="khmer-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed">សូមអរគុណជាពិសេស</h2>
            <motion.p variants={fadeInUp} className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
              សូមអរគុណចំពោះការមកចូលរួម និងគាំទ្ររបស់លោកអ្នក។ ការមានវត្តមានរបស់លោកអ្នកនឹងធ្វើឱ្យថ្ងៃពិសេសនេះកាន់តែមានអត្ថន័យ។
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 8: Gallery */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div variants={fadeInUp} className="space-y-8">
            <motion.h2
              variants={fadeInScale}
              className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center"
            >
              Our Journey
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3 sm:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  variants={fadeInScale}
                  className="aspect-square bg-card rounded-lg shadow-lg flex items-center justify-center"
                >
                  <p className="text-card-foreground/30 font-sans text-xs sm:text-sm">Photo {i}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Section 9: Location & Footer */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 snap-section overflow-x-hidden">
        <AnimatedSection className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8">
            <motion.div variants={fadeInScale} className="text-center">
              <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">Location</h2>
              <p className="khmer-text text-lg sm:text-xl md:text-2xl text-foreground">ទីតាំង</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="bg-card shadow-2xl">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="aspect-video bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-card-foreground/50 font-sans text-xs sm:text-sm">Map View</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="font-sans text-sm sm:text-base md:text-lg font-semibold text-card-foreground">Wedding Venue</p>
                    <p className="khmer-text text-sm sm:text-base text-card-foreground/80">សាលពិធីមង្គលការ</p>
                    <p className="font-sans text-xs sm:text-sm text-card-foreground/70">Phnom Penh, Cambodia</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInScale} className="text-center space-y-3 sm:space-y-4 pt-6 sm:pt-8">
              <p className="font-sans text-sm sm:text-base md:text-lg text-foreground">With love</p>
              <p className="khmer-text text-base sm:text-lg md:text-xl font-semibold text-foreground">ចន្រតនៈ & មីលីន</p>
              <p className="font-sans text-sm sm:text-base md:text-lg font-semibold text-foreground">Chanratanak & Meilin</p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  )
}

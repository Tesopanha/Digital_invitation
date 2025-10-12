"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView, AnimatePresence } from "framer-motion"

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

// Landing Page Component
function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-rose-300/40 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-18 h-18 bg-rose-200/50 rounded-full blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-md mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 0.8, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
                 >
          <img src="/logo_nobackground.png" alt="Logo" className="h-70"  />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-2 text-center"
        >
          <h1 className="khmer-text text-2xl font-bold text-gray-700 mb-2">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-4"
        >
          <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-card rounded-lg shadow-2xl overflow-hidden max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            <img src="/second.jpg" alt="Couple" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        
        >
          <div className="flex items-center justify-center space-x-4 text-gray-700">
            <div className="text-center">
              <p className="khmer-text text-xl">ថ្ងៃ ព្រហស្បតិ៏</p>
            </div>
            <div className="h-10 w-px bg-gray-400"></div>
            <div className="text-center">
              <p className="khmer-text text-2xl ">១២.០២</p>
            </div>
            <div className="text-center leading-none">
              <p className="khmer-text text-2xl  m-0">២០</p>
              <p className="khmer-text text-2xl  m-0">២៦</p>
            </div>
          </div>
          <h2 className="khmer-text text-xl center text-gray-600 mb-4 font-bold">
            សូមគោរពអញ្ជើញ
        </h2>
        </motion.div>
          
         
        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-4 rounded-full font-serif text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <span className="khmer-text">សូមបើកសំបុត្រ</span>
          
        </motion.button>
      </div>
    

      {/* Decorative Bottom Elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-300/50 to-transparent"
      >
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-rose-400 rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-rose-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Transition Page Component
function TransitionPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-16 w-32 h-32 bg-rose-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-300/20 rounded-full blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        {/* Decorative Monogram */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="text-6xl font-serif font-bold text-rose-400">R & L</span>
          
        </motion.div>

        {/* Wedding Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <h1 className="font-serif text-2xl text-gray-600 tracking-wider">
            THE WEDDING
          </h1>
          
          <div className="space-y-4">
            
            <div className="flex items-center justify-center space-x-4">
              <h2 className="font-serif text-3xl text-rose-600 font-light">TE CHANRATANAK</h2>
              <span className="text-rose-400 text-2xl">&</span>
              <h2 className="font-serif text-3xl text-rose-600 font-light">NEAT MEILIM</h2>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
       
      </div>

      {/* Bottom Decorative Wave */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-rose-200/60 to-transparent"
      >
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-rose-400 rounded-full opacity-70"
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function WeddingInvitation() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'transition' | 'main'>('landing')

  useEffect(() => {
    // Prevent horizontal scroll
    document.body.style.overflowX = "hidden"
  }, [])

  useEffect(() => {
    if (currentPage === 'transition') {
      const timer = setTimeout(() => {
        setCurrentPage('main')
      }, 4500) // 4.5 seconds

      return () => clearTimeout(timer)
    }
  }, [currentPage])

  const handleEnterInvitation = () => {
    setCurrentPage('transition')
  }

  return (
    <AnimatePresence>
      {currentPage === 'landing' && (
        <LandingPage key="landing" onEnter={handleEnterInvitation} />
      )}
      {currentPage === 'transition' && (
        <TransitionPage key="transition" />
      )}
      {currentPage === 'main' && (
        <motion.div
          key="invitation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-h-screen w-full max-w-full bg-pink-200 snap-container overflow-y-scroll overflow-x-hidden m-0 p-0"
        >
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
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
                <div className="text-left space-y-2">
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោក</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">តែ ប៊ុនម៉ូវ</p>
                  </div>
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោកស្រី</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">ប៊ូ​ ស៊ាមឡា</p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោក</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">បាន ធីតា</p>
                  </div>
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">លោកស្រី</p>
                    <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">យា ប៊ុនណាល់</p>
                  </div>
                </div>
            </div>
          </motion.p>
          <br></br>
          <motion.div variants={fadeInScale} className="px-2 sm:px-4 space-y-3 sm:space-y-4">
              <h3 className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground text-center">
              មានកិតិ្តយសសូមគោរពអញ្ជើញ
              </h3>
              <p className="khmer-text text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-center">
              សម្ដេច ទ្រង់ ឯកឧត្តម អ្នកឧកញ៉ា​​ ឧកញ៉ា​ លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរូមជាអធិបតីនិងជាភ្ញៀវ 
              កិត្តិយសដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តីជ័យមង្គល ក្នុង ពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុសកូនស្រី របស់យើងខ្ញុំ
              </p>
            </motion.div>
            <motion.div variants={fadeInScale} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full items-center">
              <div className="text-center space-y-1 sm:space-y-2">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">កូនប្រុសនាម</p>
                <p className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">តែ ច័ន្ទរនតៈ</p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <p className="khmer-text text-sm sm:text-base md:text-lg lg:text-xl text-foreground">កូនស្រីនាម</p>
                <p className="khmer-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">នាត ម៉ីលីម</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInRight} className="space-y-4 sm:space-y-6">
           <div className="text-center">
              <p className="khmer-text text-lg sm:text-xl md:text-2xl text-foreground">ដែលនឹងប្រព្រឹត្តទៅ</p>
              <p className="khmer-text text-lg sm:text-xl md:text-2xl text-foreground">ថ្ងៃ​ ព្រហស្បតិ៏ ទី ១២ ខែ កុម្ភៈ ឆ្នាំ ២០២៦</p>
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

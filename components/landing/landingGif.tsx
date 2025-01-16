'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Droplet, AlertCircle } from 'lucide-react'

const ExplosionParticle = ({ index }: { index: number }) => (
  <motion.div
    className="absolute bg-orange-500 rounded-full"
    initial={{ 
      x: '-50%',
      y: '-50%',
      scale: 0,
      opacity: 1
    }}
    animate={{
      x: `calc(-50% + ${(Math.random() - 0.5) * 150}px)`,
      y: `calc(-50% + ${(Math.random() - 0.5) * 150}px)`,
      scale: Math.random() * 6 + 3,
      opacity: 0
    }}
    transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }}
    style={{
      width: `${Math.random() * 30 + 15}px`,
      height: `${Math.random() * 30 + 15}px`,
      left: '50%',
      top: '50%'
    }}
  />
)

const WaterParticle = ({ index }: { index: number }) => (
  <motion.div
    className="absolute bg-blue-400 rounded-full"
    initial={{ 
      x: '-50%',
      y: '-50%',
      scale: 1,
      opacity: 1
    }}
    animate={{
      x: `calc(-50% + ${(Math.random() - 0.5) * 200}px)`,
      y: `calc(-50% + ${Math.random() * 300 - 150}px)`,
      scale: Math.random() * 2 + 1,
      opacity: 0
    }}
    transition={{ 
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.8
    }}
    style={{
      width: `${Math.random() * 20 + 10}px`,
      height: `${Math.random() * 20 + 10}px`,
      left: '50%',
      top: '50%'
    }}
  />
)

export default function AdvancedSodiumWaterReaction() {
  const [isReacting, setIsReacting] = useState(false)
  const [waterLevel, setWaterLevel] = useState(70)
  const [explosionParticles, setExplosionParticles] = useState<number[]>([])
  const [waterParticles, setWaterParticles] = useState<number[]>([])
  const beakerRef = useRef<HTMLDivElement>(null)
  const backgroundControls = useAnimation()
  const explosionControls = useAnimation()

  useEffect(() => {
    if (isReacting) {
      setExplosionParticles(Array.from({ length: 50 }, (_, i) => i))
      setWaterParticles(Array.from({ length: 25 }, (_, i) => i))

      const waterLevelInterval = setInterval(() => {
        setWaterLevel(prev => Math.max(0, prev - 5))
      }, 100)

      backgroundControls.start({
        backgroundColor: ["rgba(219, 39, 39, 0)", "rgba(219, 39, 39, 0.3)", "rgba(219, 39, 39, 0)"],
        transition: { duration: 0.3, repeat: 10, repeatType: "reverse" }
      })

      explosionControls.start({
        scale: [1, 1.5, 1],
        opacity: [0.8, 1, 0.8],
        transition: { duration: 0.3, repeat: 5, repeatType: "reverse" }
      })

      setTimeout(() => {
        setIsReacting(false)
        setExplosionParticles([])
        setWaterParticles([])
        setWaterLevel(70)
        clearInterval(waterLevelInterval)
        backgroundControls.start({ backgroundColor: "rgba(219, 39, 39, 0)" })
        explosionControls.stop()
      }, 2000)

      return () => clearInterval(waterLevelInterval)
    }
  }, [isReacting, backgroundControls, explosionControls])

  const handleAddSodium = () => {
    setIsReacting(true)
  }

  return (
    <motion.div 
      className="flex flex-col items-center rounded-xl justify-center min-h-96 bg-gradient-to-b from-blue-200 to-white from-30% to-100% p-8"
      animate={backgroundControls}
    >
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Sodium-Water Reaction Simulator</h1>
      
      <div className="relative w-64 h-96 mb-8" ref={beakerRef}>
        {/* Beaker */}
        <div className="absolute inset-0 border-4 border-gray-400 rounded-b-3xl overflow-hidden">
          {/* Water */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-blue-400"
            initial={{ height: `${waterLevel}%` }}
            animate={{ height: `${waterLevel}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          {/* Sodium piece */}
          {!isReacting && (
            <motion.div 
              className="absolute top-0 left-1/2 w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-400"
              initial={{ y: -50 }}
              animate={{ y: 200 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              style={{ x: '-50%' }}
            />
          )}
          
          {/* Explosion particles */}
          <AnimatePresence>
            {explosionParticles.map((id) => (
              <ExplosionParticle key={`explosion-${id}`} index={id} />
            ))}
          </AnimatePresence>

          {/* Water particles */}
          <AnimatePresence>
            {waterParticles.map((id) => (
              <WaterParticle key={`water-${id}`} index={id} />
            ))}
          </AnimatePresence>
          
          {/* Reaction effect */}
          {isReacting && (
            <motion.div 
              className="absolute inset-0 bg-gradient-radial from-yellow-400 to-transparent mix-blend-overlay"
              animate={explosionControls}
              style={{ transformOrigin: 'center center' }}
            />
          )}
        </div>
        
        {/* Measurement lines */}
        {[0, 25, 50, 75, 100].map((level) => (
          <div key={level} className="absolute left-0 w-4 h-px bg-gray-400 text-blue-500" style={{ bottom: `${level}%` }}>
            <span className="absolute right-full mr-2 text-xs">{100 - level}%</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center mb-4">
        <Droplet className="mr-2 text-blue-500" />
        <span className="mr-2 text-blue-500">Water Level:</span>
        <span className="font-bold text-blue-500">{waterLevel.toFixed(1)}%</span>
      </div>
      
      <Button 
        onClick={handleAddSodium} 
        // disabled={isReacting}
        className="mb-4 bg-red-500 hover:bg-red-600"
      >
        Add Sodium
      </Button>
      
      {isReacting && (
        <motion.div 
          className="flex items-center text-red-600 font-bold text-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <AlertCircle className="mr-2" />
          <span>DANGER! Violent reaction in progress!</span>
        </motion.div>
      )}
    </motion.div>
  )
}


'use client'

import { useState } from 'react'
import SpotlightCursor from './SpotlightCursor'
import { motion } from 'motion/react'
import { EnhancedTextEffect } from './ui/effects/enhanced-text-effect'

/**
 * A demo component to showcase the different SpotlightCursor presets
 */
const SpotlightCursorDemo = () => {
  const [activePreset, setActivePreset] = useState<'default' | 'subtle' | 'vibrant' | 'rainbow' | 'elegant' | 'minimal'>('vibrant')
  const [customConfig, setCustomConfig] = useState({
    radius: 350,
    brightness: 0.2,
    color: '#4080ff',
    smoothing: 0.1,
    interactWithElements: true
  })

  // Preset descriptions - updated for simplified spotlight
  const presetDescriptions = {
    default: 'Standard spotlight effect with balanced settings',
    subtle: 'Larger, softer glow that doesn\'t distract from content',
    vibrant: 'Bold, blue spotlight with higher brightness',
    rainbow: 'Pink-toned spotlight with medium brightness',
    elegant: 'Refined, subtle effect with smooth movement',
    minimal: 'Small, subtle effect for distraction-free browsing'
  }

  // Preset colors for the buttons
  const presetColors = {
    default: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-200',
    subtle: 'bg-slate-500/20 hover:bg-slate-500/30 text-slate-200',
    vibrant: 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200',
    rainbow: 'bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-200',
    elegant: 'bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200',
    minimal: 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-200'
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Active spotlight cursor with selected preset */}
      <SpotlightCursor preset={activePreset} config={customConfig} />

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          <EnhancedTextEffect
            words="Interactive Spotlight Cursor"
            duration={0.8}
            variant="combined"
            textSize="3xl"
            fontWeight="bold"
            threshold={0.1}
            rootMargin="50px"
          />
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Move your cursor around to see the spotlight effect in action. Choose from different presets below to experience various visual styles.
        </p>
      </div>

      {/* Preset selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {(Object.keys(presetDescriptions) as Array<keyof typeof presetDescriptions>).map((preset) => (
          <motion.button
            key={preset}
            className={`p-4 rounded-xl ${presetColors[preset]} transition-all duration-300 ${
              activePreset === preset ? 'ring-2 ring-white/30 shadow-lg scale-105' : 'opacity-80'
            }`}
            onClick={() => setActivePreset(preset)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="font-bold mb-1 capitalize">{preset}</div>
            <div className="text-xs opacity-80">{presetDescriptions[preset]}</div>
          </motion.button>
        ))}
      </div>

      {/* Interactive demo area */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-white">Interactive Demo Area</h3>
        <p className="text-white/70 text-center mb-6">
          Move your cursor over this area to see the spotlight effect. Try hovering over the buttons and interactive elements below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Interactive elements to demonstrate the spotlight effect */}
          <motion.div
            className="bg-blue-500/20 hover:bg-blue-500/30 p-6 rounded-xl text-center interactive"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="font-bold text-blue-200 mb-2">Hover Me</div>
            <p className="text-xs text-blue-100/80">Interactive element with hover effect</p>
          </motion.div>

          <motion.div
            className="bg-purple-500/20 hover:bg-purple-500/30 p-6 rounded-xl text-center interactive"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="font-bold text-purple-200 mb-2">Hover Me</div>
            <p className="text-xs text-purple-100/80">Interactive element with hover effect</p>
          </motion.div>

          <motion.div
            className="bg-teal-500/20 hover:bg-teal-500/30 p-6 rounded-xl text-center interactive"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="font-bold text-teal-200 mb-2">Hover Me</div>
            <p className="text-xs text-teal-100/80">Interactive element with hover effect</p>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-4">
          <motion.button
            className="px-4 py-2 bg-indigo-500/30 hover:bg-indigo-500/50 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Button 1
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-pink-500/30 hover:bg-pink-500/50 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Button 2
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-amber-500/30 hover:bg-amber-500/50 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Button 3
          </motion.button>
        </div>
      </div>

      {/* Implementation example */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white/50 text-xs">SpotlightCursor.tsx</div>
        </div>
        <pre className="text-sm text-white/90 font-mono overflow-x-auto p-4">
          <code>{`// Add to your layout or page component
import SpotlightCursor from "@/components/SpotlightCursor";

export default function MyPage() {
  return (
    <>
      <SpotlightCursor
        preset="vibrant"
        config={{
          // Optional: override preset settings
          radius: 350,
          brightness: 0.2,
          color: '#4080ff'
        }}
      />

      {/* Your page content */}
    </>
  );
}`}</code>
        </pre>
      </div>
    </div>
  )
}

export default SpotlightCursorDemo

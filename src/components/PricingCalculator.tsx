'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Odometer from './ui/Odometer'
import Slider from './ui/Slider'

interface PricingCalculatorProps {
  defaultPages?: number
  defaultReach?: number
  defaultCPM?: number
  onChange?: (vals: { 
    pages: number; 
    reach: number; 
    cpm: number; 
    retainer: number; 
    bonus: number; 
    total: number;
    igAddOn: boolean;
    igAddOnCost: number;
  }) => void
}

export default function PricingCalculator({
  defaultPages = 6,
  defaultReach = 10_000_000,
  defaultCPM = 0.15,
  onChange
}: PricingCalculatorProps) {
  const [pages, setPages] = useState(defaultPages)
  const [reach, setReach] = useState(defaultReach)
  const [cpm, setCpm] = useState(defaultCPM)
  const [igAddOn, setIgAddOn] = useState<boolean>(false)
  const [debouncedPages, setDebouncedPages] = useState(defaultPages)
  const [debouncedReach, setDebouncedReach] = useState(defaultReach)
  const [debouncedCpm, setDebouncedCpm] = useState(defaultCPM)

  // Debounce inputs
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedPages(pages), 200)
    return () => clearTimeout(timer)
  }, [pages])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedReach(reach), 200)
    return () => clearTimeout(timer)
  }, [reach])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedCpm(cpm), 200)
    return () => clearTimeout(timer)
  }, [cpm])

  // Calculate values
  const retainer = 1000 + Math.max(0, debouncedPages - 1) * 400
  const estBonus = (debouncedReach / 1000) * debouncedCpm
  const igAddOnCost = igAddOn ? debouncedPages * 100 : 0
  const total = retainer + estBonus + igAddOnCost
  const contentPerMonth = debouncedPages * 30

  // Notify parent of changes
  useEffect(() => {
    onChange?.({
      pages: debouncedPages,
      reach: debouncedReach,
      cpm: debouncedCpm,
      retainer,
      bonus: estBonus,
      total,
      igAddOn,
      igAddOnCost
    })
  }, [debouncedPages, debouncedReach, debouncedCpm, retainer, estBonus, total, igAddOn, igAddOnCost, onChange])

  // helpers
  const toMillionsLabel = (n: number) => `${Math.round(n / 1_000_000)}M`;

  const formatReach = (value: number) => {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(0)}M`
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(0)}K`
    }
    return value.toString()
  }

  const parseReach = (value: string) => {
    const num = parseFloat(value.replace(/[KM]/g, ''))
    if (value.includes('M')) return num * 1_000_000
    if (value.includes('K')) return num * 1_000
    return num
  }

  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6">Customize Your Plan</h3>
          
          {/* Pages */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-300">
              Theme Pages: {pages}
            </label>
            <div className="flex items-center space-x-4">
              <Slider min={1} max={20} step={1} value={pages} onChange={setPages} className="flex-1" />
              <input
                type="number"
                min="1"
                max="20"
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value) || 1)}
                className="w-20 px-3 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white text-center"
              />
            </div>
          </div>

          {/* Goal Reach */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-300">
              Monthly Goal Reach: {toMillionsLabel(reach)}
            </label>
            <div className="flex items-center space-x-4">
              <Slider
                min={5_000_000}
                max={100_000_000}
                step={100_000}
                value={reach}
                onChange={setReach}
                className="flex-1"
              />
              <input
                type="text"
                value={toMillionsLabel(reach)}
                onChange={(e) => {
                  // allow "44M" or "44000000"
                  const raw = e.target.value.trim().toLowerCase();
                  let next = 0;
                  if (raw.endsWith("m")) next = Number(raw.replace("m","")) * 1_000_000;
                  else next = Number(raw.replace(/,/g, ""));
                  if (Number.isFinite(next)) {
                    setReach(Math.max(5_000_000, Math.min(100_000_000, next)));
                  }
                }}
                className="w-24 px-3 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white text-center"
                placeholder="10M"
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-neutral-400 text-sm">5M – 100M</span>
            </div>
          </div>

          {/* CPM */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-neutral-300">
              CPM Rate: ${cpm.toFixed(2)} (varies by niche)
            </label>
            <div className="flex items-center space-x-4">
              <Slider min={0.15} max={0.30} step={0.01} value={cpm} onChange={setCpm} className="flex-1" />
              <input
                type="number"
                min="0.15"
                max="0.30"
                step="0.01"
                value={cpm}
                onChange={(e) => setCpm(parseFloat(e.target.value) || 0.15)}
                className="w-20 px-3 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white text-center"
              />
            </div>
          </div>

          {/* Instagram Add-on */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-neutral-300">
                Post to Instagram as well
              </label>
              <button
                type="button"
                onClick={() => setIgAddOn(!igAddOn)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-900 ${
                  igAddOn ? 'bg-accent' : 'bg-neutral-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    igAddOn ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-neutral-400">
              +$100 per page for Instagram cross-posting
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6">Monthly Estimate</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-300">Base Retainer:</span>
              <Odometer 
                value={retainer} 
                className="text-lg font-semibold text-white"
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-neutral-300">Est. Content / Month:</span>
              <span className="text-lg font-semibold text-white">
                {contentPerMonth} posts
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-neutral-300">Est. CPM Bonus:</span>
              <Odometer 
                value={estBonus} 
                className="text-lg font-semibold text-accent"
              />
            </div>

            {igAddOn && (
              <div className="flex justify-between items-center">
                <span className="text-neutral-300">IG Cross-post Add-on:</span>
                <Odometer 
                  value={igAddOnCost} 
                  className="text-lg font-semibold text-white"
                />
              </div>
            )}
            
            <div className="border-t border-neutral-600 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-white">Total Monthly:</span>
                <Odometer 
                  value={total} 
                  className="text-2xl font-bold text-accent"
                />
              </div>
            </div>
          </div>
          
          <p className="text-xs text-neutral-400 mt-4">
            Estimate based on platform-reported impressions. Final CPM bonus billed monthly.
          </p>
        </div>
      </div>
    </motion.div>
  )
} 
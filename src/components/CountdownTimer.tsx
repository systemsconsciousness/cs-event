'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text text-center">
        Conference Countdown
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="countdown-segment rounded-lg p-4 md:p-6 text-center">
          <div className="countdown-number text-4xl md:text-6xl">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="countdown-label mt-2">Days</div>
        </div>
        
        <div className="countdown-segment rounded-lg p-4 md:p-6 text-center">
          <div className="countdown-number text-4xl md:text-6xl">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="countdown-label mt-2">Hours</div>
        </div>
        
        <div className="countdown-segment rounded-lg p-4 md:p-6 text-center">
          <div className="countdown-number text-4xl md:text-6xl">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="countdown-label mt-2">Minutes</div>
        </div>
        
        <div className="countdown-segment rounded-lg p-4 md:p-6 text-center">
          <div className="countdown-number text-4xl md:text-6xl">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="countdown-label mt-2">Seconds</div>
        </div>
      </div>
      
      <p className="text-center text-gray-400 mt-6 text-sm md:text-base">
        Until AI DXP Island 2028 begins
      </p>
    </div>
  )
}

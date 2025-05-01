"use client"

import { useRef, useState, useLayoutEffect } from "react"
import { Button } from "@/components/ui/button"
import Markdown from "react-markdown"

interface TooltipButtonProps {
  buttonText: string
  tooltipContent: string
  isTooltipLocked: boolean,
  setIsTooltipLocked: (value: boolean) => void,
  icon?: any
}

export default function TooltipButton({ buttonText, tooltipContent, isTooltipLocked, setIsTooltipLocked, icon }: TooltipButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })
  const [tooltipDimensions, setTooltipDimensions] = useState({ width: 0, height: 0 })

  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Measure tooltip dimensions when it becomes visible
  useLayoutEffect(() => {
    if (isTooltipVisible && tooltipRef.current) {
      const { width, height } = tooltipRef.current.getBoundingClientRect()
      setTooltipDimensions({ width, height })
    }
  }, [isTooltipVisible])

  useLayoutEffect(() => {
    if (isTooltipLocked) {
      setIsTooltipVisible(true)
    } else {
      setIsTooltipVisible(false)
    }
  }, [isTooltipLocked])

  // Update tooltip position when dimensions change
  useLayoutEffect(() => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()

      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let top = buttonRect.bottom + 8 // Position below the button with 8px gap
      let left = buttonRect.left + buttonRect.width / 2 - tooltipDimensions.width / 2

      // Adjust if the tooltip overflows the right edge
      if (left + tooltipDimensions.width > viewportWidth) {
        left = viewportWidth - tooltipDimensions.width - 8 // 8px padding from the edge
      }

      // Adjust if the tooltip overflows the left edge
      if (left < 0) {
        left = 8 // 8px padding from the edge
      }

      // Adjust if the tooltip overflows the bottom edge
      if (top + tooltipDimensions.height > viewportHeight) {
        top = buttonRect.top - tooltipDimensions.height - 8 // Position above the button
      }

      setTooltipPosition({ top, left })
    }
  }, [tooltipDimensions])

  const handleMouseEnter = () => {
    if (!isTooltipLocked) {
      setIsTooltipVisible(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isTooltipLocked) {
      setIsTooltipVisible(false)
    }
  }

  const handleClick = () => {
    if (isTooltipLocked) {
      setIsTooltipLocked(false)
      setIsTooltipVisible(false)
    } else {
      setIsTooltipLocked(true)
      setIsTooltipVisible(true)
    }
  }
  return (
    <div className="relative inline-block">
      <Button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        variant={isTooltipLocked ? "secondary" : "outline"}
        className="rounded-full flex items-center justify-center gap-2 aspect-square lg:aspect-auto lg:min-w-[100px]"
      >
        {icon}
        <span className="hidden lg:block">{buttonText}</span>
        {isTooltipLocked && <span className="sr-only">(Tooltip locked)</span>}
      </Button>

      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`fixed ${isTooltipLocked ? "z-40" : "z-50"} px-4 py-2 max-w-[375px] text-sm text-gray-800 bg-white border border-gray-200 rounded-2xl shadow-lg transition-opacity duration-200`}
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
          }}
        >
          <Markdown>{tooltipContent}</Markdown>
          <div className="absolute w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45 -top-1 left-1/2 -translate-x-1/2"/>
          {isTooltipLocked && <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />}
        </div>
      )}
    </div>
  )
}



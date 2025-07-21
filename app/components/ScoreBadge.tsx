import React from 'react'

interface ScoreBadgeProps {
  score: number
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const getBadgeConfig = (score: number) => {
    if (score > 70) {
      return {
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
        borderColor: 'border-green-200',
        label: 'Strong'
      }
    } else if (score > 49) {
      return {
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-800',
        borderColor: 'border-yellow-200',
        label: 'Good Start'
      }
    } else {
      return {
        bgColor: 'bg-red-100',
        textColor: 'text-red-800',
        borderColor: 'border-red-200',
        label: 'Needs Work'
      }
    }
  }

  const badgeConfig = getBadgeConfig(score)

  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border
        ${badgeConfig.bgColor} 
        ${badgeConfig.textColor} 
        ${badgeConfig.borderColor}
      `}
    >
      {badgeConfig.label}
    </span>
  )
}

export default ScoreBadge

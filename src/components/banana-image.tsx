import React from 'react'
// Import Lucide icons for different fruit varieties
import { Banana, Cherry, Citrus, Leaf } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
// Import Image from next/image when we have real images
// import Image from 'next/image'

interface BananaImageProps {
  variety: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

// Define a type for the variety keys to ensure type safety
type VarietyKey = 'Organic Cavendish' | 'Red Bananas' | 'Baby Bananas' | 'Plantains' | 
                  'Lady Finger' | 'Blue Java' | 'Burro' | 'Green Cooking' | 'default';

// Mapping of banana varieties to their image paths - will be used when we have real images
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const varietyImages: Record<VarietyKey, string> = {
  'Organic Cavendish': '/images/cavendish.jpg',
  'Red Bananas': '/images/red-banana.jpg',
  'Baby Bananas': '/images/baby-banana.jpg',
  'Plantains': '/images/plantain.jpg',
  'Lady Finger': '/images/lady-finger.jpg',
  'Blue Java': '/images/blue-java.jpg',
  'Burro': '/images/burro.jpg',
  'Green Cooking': '/images/green-cooking.jpg',
  // Default image if variety doesn't match
  'default': '/images/cavendish.jpg'
}

// Background colors to complement the banana varieties
const varietyBackgrounds: Record<VarietyKey, string> = {
  'Organic Cavendish': 'bg-yellow-50',
  'Red Bananas': 'bg-red-50',
  'Baby Bananas': 'bg-amber-50',
  'Plantains': 'bg-green-50',
  'Lady Finger': 'bg-yellow-50',
  'Blue Java': 'bg-blue-50',
  'Burro': 'bg-lime-50',
  'Green Cooking': 'bg-emerald-50',
  // Default background if variety doesn't match
  'default': 'bg-yellow-50'
}

// Map banana varieties to appropriate icons
const varietyIcons: Record<VarietyKey, LucideIcon> = {
  'Organic Cavendish': Banana,
  'Red Bananas': Cherry,
  'Baby Bananas': Banana,
  'Plantains': Banana,
  'Lady Finger': Banana,
  'Blue Java': Citrus,
  'Burro': Banana,
  'Green Cooking': Leaf,
  // Default icon if variety doesn't match
  'default': Banana
}

// Map banana varieties to icon colors
const varietyIconColors: Record<VarietyKey, string> = {
  'Organic Cavendish': 'text-yellow-500',
  'Red Bananas': 'text-red-500',
  'Baby Bananas': 'text-amber-400',
  'Plantains': 'text-green-600',
  'Lady Finger': 'text-yellow-400',
  'Blue Java': 'text-blue-400',
  'Burro': 'text-lime-500',
  'Green Cooking': 'text-emerald-600',
  // Default color if variety doesn't match
  'default': 'text-yellow-500'
}

// Helper function to find the best match for a variety name
function findBestMatch<T extends Record<VarietyKey, unknown>>(fullVarietyName: string, mapping: T): VarietyKey {
  // First, try to find an exact match
  if (fullVarietyName in mapping) {
    return fullVarietyName as VarietyKey;
  }
  
  // If no exact match, try to find a partial match
  const normalizedName = fullVarietyName.toLowerCase();
  
  for (const key of Object.keys(mapping) as VarietyKey[]) {
    if (normalizedName.includes(key.toLowerCase())) {
      return key;
    }
  }
  
  // Extract the first two words which often contain the variety name
  const firstTwoWords = fullVarietyName.split(' ').slice(0, 2).join(' ');
  if (firstTwoWords in mapping) {
    return firstTwoWords as VarietyKey;
  }
  
  // If all else fails, return default
  return 'default';
}

export function BananaImage({ variety, size = 'md', className = '' }: BananaImageProps) {
  // Find the best matching variety key
  const matchedVariety = findBestMatch(variety, varietyBackgrounds);
  
  // Get background color based on variety
  const bgColor = varietyBackgrounds[matchedVariety];
  
  // Get icon color based on variety
  const iconColor = varietyIconColors[findBestMatch(variety, varietyIconColors)];
  
  // Get the appropriate icon component based on variety
  const IconComponent = varietyIcons[findBestMatch(variety, varietyIcons)];
  
  // Size mapping
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }
  
  // Icon size mapping
  const iconSizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96
  }
  
  const sizeClass = sizeMap[size]
  const iconSize = iconSizeMap[size]
  
  return (
    <div 
      className={`relative ${sizeClass} ${className} flex items-center justify-center rounded-lg overflow-hidden banana-shine`}
    >
      <div className="relative w-full h-full banana-hover banana-float">
        {/* Use Lucide icons instead of emoji placeholders */}
        <div className={`w-full h-full flex items-center justify-center ${bgColor}`}>
          <IconComponent 
            size={iconSize} 
            className={iconColor} 
            strokeWidth={1.5}
          />
          
          {/* Uncomment this when real images are available
          <Image
            src={varietyImages[variety as keyof typeof varietyImages] || varietyImages.default}
            alt={`${variety} banana`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          */}
        </div>
        
        {/* Variety label for larger sizes */}
        {(size === 'lg' || size === 'xl') && (
          <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-medium bg-black bg-opacity-20 text-white p-1 rounded-b-lg">
            {variety.split(' ')[0]}
          </div>
        )}
      </div>
    </div>
  )
}

// Bunch of bananas component for homepage or featured sections
export function BananaBunch({ variety, size = 'lg', className = '' }: BananaImageProps) {
  // Find the best matching variety key
  const matchedVariety = findBestMatch(variety, varietyBackgrounds);
  
  // Get background color based on variety
  const bgColor = varietyBackgrounds[matchedVariety];
  
  // Get icon color based on variety
  const iconColor = varietyIconColors[findBestMatch(variety, varietyIconColors)];
  
  // Get the appropriate icon component based on variety
  const IconComponent = varietyIcons[findBestMatch(variety, varietyIcons)];
  
  const sizeMap = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  }
  
  const sizeClass = sizeMap[size]
  
  return (
    <div 
      className={`relative ${sizeClass} ${className} flex items-center justify-center rounded-lg overflow-hidden banana-shine`}
    >
      <div className="relative w-full h-full banana-hover banana-float">
        {/* Use Lucide icons instead of emoji placeholders */}
        <div className={`w-full h-full flex items-center justify-center ${bgColor}`}>
          <div className="relative w-full h-full">
            <IconComponent 
              size={48} 
              className={`absolute ${iconColor}`} 
              style={{ top: '10%', left: '20%' }}
              strokeWidth={1.5}
            />
            <IconComponent 
              size={48} 
              className={`absolute ${iconColor}`} 
              style={{ top: '30%', left: '50%' }}
              strokeWidth={1.5}
            />
            <IconComponent 
              size={48} 
              className={`absolute ${iconColor}`} 
              style={{ top: '50%', left: '25%' }}
              strokeWidth={1.5}
            />
          </div>
          
          {/* Uncomment this when real images are available
          <Image
            src={varietyImages[variety as keyof typeof varietyImages] || varietyImages.default}
            alt={`${variety} banana bunch`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          */}
        </div>
        
        {/* Variety label */}
        <div className="absolute bottom-0 left-0 right-0 text-center text-sm font-medium bg-black bg-opacity-30 text-white p-1">
          {variety}
        </div>
      </div>
    </div>
  )
} 
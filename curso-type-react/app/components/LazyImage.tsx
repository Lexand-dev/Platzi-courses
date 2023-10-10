import { useEffect, useRef, useState } from "react"

import type { ImgHTMLAttributes } from "react"

// create a random number between 1 and 122
type LazyImageProps = { src: string }

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

export default function LazyImage({src, ...imgProps}: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null)
  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  // nuevo observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { 
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    }
    )
    // start observing
    if (node.current) {
      observer.observe(node.current!)
    }
    // stop observing
    return () => observer.disconnect()

  }
  , [src])

  return (
    <div>
    
      <img 
        ref={node} 
        src={currentSrc} 
        {...imgProps}
      />
    </div>
  )
}

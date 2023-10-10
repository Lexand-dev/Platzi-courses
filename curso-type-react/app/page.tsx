'use client';
import type { MouseEventHandler } from "react";
import { useState } from "react";
import LazyImage from "./components/LazyImage";


const random = () => {
  return Math.floor(Math.random() * 122) + 1
}
// create unique id string
const uniqueId = () => {
  return Math.random().toString(36).substr(2, 9)
}

type ArrayImage = {
  id: string,
  url: string
}


export default function Home() {
  const [images, setImages] = useState <Array<ArrayImage>>([
  ])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    const newImageItem: ArrayImage = {
      id: uniqueId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    }
    setImages([...images, newImageItem])
  }

  return (
    <main className="flex h-screen flex-col items-center p-24">
        <h1 className="pb-4">RandomFox</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addNewFox}>addNewFox</button>
      {
        images.map(({id, url}) => (
          <div key={id} className="pb-4 flex">

            <LazyImage   
              src={url} 
              width={320} 
              className="h-auto rounded bg-gray-300" 
              alt="random fox"
              onClick={() => alert('Hey!')}
            />
              
          </div>
        ))
      }
    </main>
  )
}

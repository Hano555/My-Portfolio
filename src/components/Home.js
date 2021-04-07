import React from "react"
import image from "../img/background_image.png"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Seasonal Change" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Hey There!. I'm Hanosiyan.</h1>
            </section>
        </main>
    )
}
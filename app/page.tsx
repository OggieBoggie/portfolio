import Navbar from "@/components/Navbar"
import HomeHero from "./components/HomeHero"

export const metadata = {
  title: "Tommy's Portfolio",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />    
    </>
  )
}
import Navbar from "@/components/Navbar"
import HomeMain from "./components/HomeMain"
import Footer from "./components/Footer"
export const metadata = {
  title: "Tommy's Portfolio",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeMain />    
      <Footer />
    </>
  )
}
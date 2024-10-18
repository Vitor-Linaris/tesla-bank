/* import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; */

import Header from '../../components/Header/Header.component'
import Hero from '../../components/Hero/Hero.component'
import OpenCountFree from '../../components/Open-count-free/Open-count-free.component'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OpenCountFree />
    </>
  )
}

export default Home

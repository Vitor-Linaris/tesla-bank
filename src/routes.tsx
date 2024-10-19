import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.page'
import NotFound from './pages/Not-found/Not-found'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router

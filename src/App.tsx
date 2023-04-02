import { AnimatePresence } from "framer-motion";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from './components/navbar';
import { Home } from './pages';
import { About } from './pages/About';

const Root = () => {
  return <>
    <main>
      <div className="w-full flex">
        <div className="navbar w-[18%] sticky top-0 left-0 h-screen bg-stone-50 text-stone-100 shadow-xl shadow-stone-300">
          <Navbar />
        </div>
        <div className="main-body w-[82%] text-white">
          <Outlet />
        </div>
      </div>
    </main>
  </>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
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
      <div className="w-full grid grid-cols-12">
        <div className="col-span-2 h-screen bg-[#1C1C1C] text-white">
          <Navbar />
        </div>
        <div className="col-span-10 bg-[#161616] text-white">
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
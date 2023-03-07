import { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Route>
    )
  );

  return (
    <main className="App">
      <RouterProvider router={router} />
    </main>
  );
}

function Root() {
  const main = useRef() as React.MutableRefObject<HTMLElement>;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [useParams()]);

  return (
    <main className="relative" ref={main}>
      <Navbar />
      <Outlet />
      <Footer />
      <div
        className="pointer-events-none z-[1000] duration-100 bg-[#00000022] backdrop-blur fixed top-0 left-0 w-screen 
        h-screen flex justify-center items-center"
        style={{ opacity: loading ? 100 : 0 }}
      >
        <h2 className="text-white text-7xl font-bold font-mono">Loading...</h2>
      </div>
    </main>
  );
}

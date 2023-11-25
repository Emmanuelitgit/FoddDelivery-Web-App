
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopPicks from "./components/TopPicks";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import CartItems from "./pages/CartItems";
import Home from "./components/Home";


const Layout =()=>{
  return(
   <> 
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
 }
 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout/>,
     children:[
       {
       path: "/",
       element: <Home/>
       },

       {
        path: "/cart",
        element: <CartItems/>
       },
     ]
   },
 
   {
     path: "/register",
     element: <Register/>
   },
 
   {
     path: "/login",
     element: <Login/>
   },

 ])


function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;

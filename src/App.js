import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LoginComponent, { action as loginAction } from './pages/login/LoginComponent';
import HomeComponent from './pages/home/HomeComponent';
import CategoryComponent from './pages/category/CategoryComponent';
import AllProduct from './pages/product/AllProduct';
import SignupComponent, { action as signUpAction } from './pages/signup/SignupComponent';
import RootLayout from './pages/rootLayout/root';
import { tokenLoader } from './util/auth';
import ProtectedRoute from './components/ProtectedRouter';
import { LogoutComponent, action as logoutAction } from "./pages/login/LogoutComponent";


const router = createBrowserRouter([
  {
    path: "/eDrink24",
    element: <RootLayout />,
    loader: tokenLoader,
    children: [
      { path: '/eDrink24', element: <HomeComponent /> },
      { path: '/eDrink24/allproduct', element: <AllProduct /> },
      { path: '/eDrink24/category', element: <CategoryComponent /> },
      {
        path: '/eDrink24/login', element: <LoginComponent />,
        action: loginAction
      },
      {
        path: '/eDrink24/signup', element: <SignupComponent />,
        action: signUpAction
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "*", element: <Navigate to="/eDrink24" /> },
        ]
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
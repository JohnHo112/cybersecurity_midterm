import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout, { RootIndex } from "./pages";
import "./index.css";
import MessagesPage from "./pages/messages";
import LoginUserPage from "./pages/login-user";
import CreateUserPage from "./pages/create-user";
import ErrorPage from "./pages/error-page";
import MyAccountPage from "./pages/my-account";


const App = () => {
  const [signedUser, setSignedUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <RootLayout signedUser={signedUser} setSignedUser={setSignedUser} />
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <RootIndex /> },
        {
          path: "/messages",
          element: <MessagesPage signedUser={signedUser} setSignedUser={setSignedUser}/>,
        },
        {
          path: "/login-user",
          element: <LoginUserPage signedUser={signedUser} setSignedUser={setSignedUser}/>,
        },
        {
          path: "/create-user",
          element: <CreateUserPage signedUser={signedUser} setSignedUser={setSignedUser}/>,
        },
        {
          path: "/my-account",
          element: <MyAccountPage signedUser={signedUser} setSignedUser={setSignedUser}/>,
        },
      ],
    },
  ]);

  return(
    <React.StrictMode> 
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

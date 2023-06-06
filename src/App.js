// import React from "react";
// import { useRoutes } from "react-router-dom";
// import {
//   Home,
//   About,
//   Events,
//   Products,
//   Contact,
//   Whoops404,
//   Services,
//   History,
//   Location
// } from "./pages";

// function App() {
//   let element = useRoutes([
//     { path: "/", element: <Home /> },
//     {
//       path: "about",
//       element: <About />,
//       children: [
//         {
//           path: "services",
//           element: <Services />
//         },
//         { path: "history", element: <History /> },
//         {
//           path: "location",
//           element: <Location />
//         }
//       ]
//     },
//     { path: "events", element: <Events /> },
//     { path: "products", element: <Products /> },
//     { path: "contact", element: <Contact /> },
//     { path: "*", element: <Whoops404 /> },
//     {
//       path: "services",
//       redirectTo: "about/services"
//     }
//   ]);
//   return element;
// }

// export default App;

import "./reset.css";
import './App.css';
import React from "react";
import {
  Routes,
  Route,
 // redirect
 //Navigate
} from "react-router-dom";
import {
  Header,
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  Services,
  History,
  Location
} from "./pages";

//import $ from "jquery";

function App() {

// $(function(){
//   $("nav a").on("mouseenter",function(){
//    $("nav ul").stop().slideDown(500);
//   });
// });


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route
            path="services"
            element={<Services />}
          />

          <Route
            path="history"
            element={<History />}
          />
          <Route
            path="location"
            element={<Location />}
          />
        </Route>
        <Route
          path="events"
          element={<Events />}
        />
        <Route
          path="products"
          element={<Products />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        {/* <Navigate
          from="services"
          to="about/services"
        /> */}
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;

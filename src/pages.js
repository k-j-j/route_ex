import React from "react";
import {
  Link,
  useLocation,
  Outlet
} from "react-router-dom";

import $ from "jquery";


export function Header() {
  return (
    <div>
       <h1>
                <Link to="/">
                    WEBSITE
                </Link>
            </h1>
     </div> 
     ); 
}


export function Home() {
  $(function(){
    $("nav a").on("mouseenter",function(){
     $("nav ul").stop().slideDown(500);
    });

    $("nav> a").on("mouseleave",function(){
      $("nav ul").stop().slideUp(500);
     });


  });

  return (
    <div className="menu">
       <nav>
        <Link to="about">About
        <ul>
         <li><Link to="about/history">History</Link></li>
         <li><Link to="about/location">Location</Link></li>
         <li><Link to="about/services">Services</Link> </li>
         </ul>
         </Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>

      <h1>[About]</h1>
      <p>Our company...</p>
      <Outlet /> 
      {/* children과 같은 효과  */}
      {/* Outlet은 정의한 Router에서 특정 path에 해당하는 경로에 children이 있을 때, 
      해당 컴포넌트를 렌더링하도록 해주는 컴포넌트이다. 반드시 부모 컴포넌트 내에서 정의해줘야 함.
       그래야 해당 컴포넌트의 자식 컴포넌트와 연결이 가능하기 때문.
     */}
    </div>
  );
}
export function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class
        aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}
export function History() {
  return (
    <section>
      <h2>Our History</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class
        aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}
export function Location() {
  return (
    <section>
      <h2>Our Location</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class
        aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <p>Event...</p>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
      <p>Prodcut...</p>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
        <p>Contact...</p>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>
        Resource not found at {location.pathname}
      </h1>
    </div>
  );
}

import React from "react";
import "../styles/notfound.css";
const NotFound = () => {
  return (
//    <div class="page-wrap d-flex flex-row align-items-center">
//   <div class="container">
//       <div class="row justify-content-center">
//           <div class="col-md-12 text-center">
//               <span class="display-1 d-block">404</span>
//               <div class="mb-4 lead">The page you are looking for was not found.</div>
//               <a href="/" class="btn btn-link">Back to Home</a>
//           </div>  
//       </div>
//   </div>
// </div>
<div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="/movies" className="inline-flex">
            <span className="sr-only">Products</span>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
            <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-6">
              <a href="/movies" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a href="/movies" className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Contact Support
          </a>
          {/* <span className="inline-block border-l border-gray-300" aria-hidden="true" />
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Status
          </a>
          <span className="inline-block border-l border-gray-300" aria-hidden="true" /> */}
          <a href="/movies" className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  )
};

export default NotFound;

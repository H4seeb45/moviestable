import React from "react";
import Error from "./error";
// import {ErrorText} from "./error";
const Input = ({ name, label, error, ...rest }) => {
  return (
    // <div className="form-group">
    //   <label htmlFor={name} className="text-xl font-bold text-gray-100 tracking-wide" >
    //   {label}
    //   </label>
    //   <input
    //     {...rest}
    //     name={name}
    //     id={name}
    //     className="form-control col-sm-3 md:flex w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
    //     //previous classes form-control col-sm-3 md:flex w-full rounded p-2 border border-blue-500
    //   /> 
    //   {/* {error && {Error}} */}
      
    //   {error && <div className="alert alert-danger col-sm-3">{error}</div>}
    // </div>
    <div>
      <label htmlFor={name} className="mt-2 block text-medium font-medium text-gray-700">
          {label}
      </label>
        <div className="mt-1 relative rounded-md shadow-sm w-2/3 md:w-1/3">
        <input
          {...rest}
          name={name}
          id="email"
          aria-invalid="true"
          aria-describedby="email-error"
          className={
            error
              ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          }
          // className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          
        />
        {error && <Error />}
        {/* {error && {ErrorText}} */}
        {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div> */}
      </div>
    </div>
  );
};

export default Input;

import React from "react";
import { ExclamationCircleIcon } from '@heroicons/react/solid';
// export default function Error(){
//     return(
//         <div className="inline-block bg-red-200 text-red-700 rounded w-4 text-center px-auto">*</div>
//     )
// }
const Error = () => {
    return(
        // <div className="ml-2 inline-block bg-red-200 text-red-700 rounded w-4 text-center px-auto">*</div>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>    
    );
  };

  export const ErrorText =()=>{
    return(
        <p className="mt-2 text-sm text-red-600" id="email-error">
            Your password must be less than 4 characters.
        </p>
    )
  }
  
  export default Error;
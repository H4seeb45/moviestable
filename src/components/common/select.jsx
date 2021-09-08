import React from "react";
import Error from "./error.jsx";

const Select = ({ name, label, options, error, ...rest }) => {
  var optionslist = Array.from(options);
  return (
    <div className="form-group">
      <div><label htmlFor={name} className="mt-2 block text-medium font-medium text-gray-700">{label}</label></div>
      
      <select name={name} id={name} {...rest} className="ml-0 form-control inline-block md:w-1/3 w-1/2 py-2">
        <option value="" />
        {optionslist.map(option => (
          <option key={option._id} value={option._id}>
            {" "}
            {option.name}
          </option>
        ))}
      </select> 
      {error && <Error />}
      {error && <div className="bg-red-200 text-red-700 md:w-1/3 w-1/2 mt-2 rounded py-1 px-2">*{error} </div>}
    </div>
  );
};

export default Select;

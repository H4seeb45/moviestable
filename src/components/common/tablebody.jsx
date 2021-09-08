import React from "react";
import _ from "lodash";
// items
// raiseDeleteItem
const TableBody = (props) => {
  const { items, columns } = props;
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  return (
    
    <tbody className="bg-white divide-y divide-gray-200 ">
      {items.map((item) => (
        // <tr className="content-center font-semibold text-indigo-600" key={item._id}>
          
        //   {columns.map((column) => (

            
        //     <td className="mx-5 content-center" key={item.path + (column.path || column.key)}>
        //       {renderCell(item, column)}
        //     </td>
        //   ))}
        // </tr>
        <tr key={item._id}>
          {columns.map((column) => (
        <td className="px-8 py-2 whitespace-nowrap mx-auto" key={item.path + (column.path || column.key)}>
          <div className="flex items-center">
            {/* <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            </div> */}
            <div className="ml-4">
              {renderCell(item, column)}
            </div>
          </div>
        </td>
        ))}
        
        
      </tr>
      ))}
    </tbody>
    
  );
};

export default TableBody;

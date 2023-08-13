// import React from "react";

// export default function Accordion({heading, body, hastagbody, expand, hidden, titleButton, desc, image}) {

//   return (
//     <>      {!hidden
//                 ?  <div>
//                         <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-900 bg-gray-100 rounded-t-xl border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target={hastagbody} aria-expanded={expand} aria-controls={body}>
//                             <span>{titleButton}</span>
//                             <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                         </button>
//                         <div id={body} aria-labelledby={heading}>
//                             <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//                                 {desc}
//                             </div>
//                             <div className="p-5 lg:p-0 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//                                 {image}
//                             </div>
//                         </div>
//                     </div>
//                 :  <div>
//                         <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target={hastagbody} aria-expanded={expand} aria-controls={body}>
//                             <span>{titleButton}</span>
//                             <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                         </button>
//                         <div id={body} className="hidden" aria-labelledby={heading}> 
//                             <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//                                 {desc}
//                             </div>
//                             <div className="p-5 lg:p-0 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//                                 {image}
//                             </div>
//                         </div>
//                     </div>
//             }
//     </>
//   );
// }

import React from "react";

let FormInput=React.forwardRef((props,ref)=>{
   return (
    <div className="mb-3 col-md-6">
            <label className="form-label">{props.title}</label>
            <input type={props.type} 
            className={`form-control ${props.inputClass}`} 
            
            ref={ref} />
          </div>
 )
})
// function FormInput(props){
//  return (
//     <div className="mb-3 col-md-6">
//             <label className="form-label">{props.title}</label>
//             <input type={props.type} 
//             className={`form-control ${props.inputClass}`} 
//             addTitle aria-describedby=""
//             ref={props.inputRef} />
//           </div>
//  )
// }
export default FormInput;
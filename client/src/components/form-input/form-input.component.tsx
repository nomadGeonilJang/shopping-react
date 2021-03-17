import React, { forwardRef } from "react";
import "./form-input.styles.scss";

type FormInputType = {
    onChange( e:React.ChangeEvent<HTMLInputElement> ):void;
    label?:string;
    [key:string]:any
}

const FormInput = ( { onChange, label, ...otherProps }:FormInputType, ref:any ) => (
  <div className="group">
    <input ref={ref} onChange={onChange} className="form-input" {...otherProps}/>
    {label && <label className={`${otherProps.value.length  ? 'shrink' : ''} form-input-label`}>{label}</label>}
  </div>
);

export default forwardRef( FormInput );
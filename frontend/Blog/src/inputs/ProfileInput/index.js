import React from 'react'
import { useField, ErrorMessage } from "formik";
import './style.css'

export default function ProfileInput({ placeholder, ...props }) {
    const [field, meta] = useField(props);
  return (
    <div className='login-input'>
       <div className='validation-error'>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
       </div>
      
       <input type={field.type} name={field.name} placeholder={placeholder} {...field} {...props}

      />
    </div>
  )
}

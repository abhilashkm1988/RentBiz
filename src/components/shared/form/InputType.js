import React from 'react'

const InputType = ({ inputType, value, onChange, name, placeholder, className, controlRef, autocomplete="off" }) => {
  return (
    <>
      <input
        ref={controlRef}
        type={inputType}
        autoComplete={autocomplete}
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default InputType
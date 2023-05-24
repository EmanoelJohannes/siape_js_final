import React from 'react'

import { Input, Label, FormGroup } from './styles'

export const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  disabled
}) => (
  <FormGroup>
    {label && <Label htmlFor="input-field">{label}</Label>}
    <Input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  </FormGroup>
)

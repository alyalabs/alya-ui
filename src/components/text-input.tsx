import React, { forwardRef, memo } from 'react'
import { nanoid } from 'nanoid'
import clsx from 'clsx'

import type { AlyaForms } from 'alya-forms'

type TextInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> & AlyaForms.Connect & {
  id?: string
  label?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, attribute: AlyaForms.Attribute) => void
}

const TextInput = memo(forwardRef<HTMLInputElement, TextInputProps>(function ({
  name,
  attribute = {},
  setAttribute,
  useAttribute,
  id = nanoid(),
  label,
  placeholder,
  onChange,
  ...props
}, ref) {

  useAttribute()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    const attribute = { display: inputValue, value: inputValue }

    setAttribute(attribute)

    if (onChange) onChange(event, attribute)
  }

  function renderLabel() {
    if (label) {
      return (
        <label className="alya-text-input__label" htmlFor={id}>
          {label}
        </label>
      )
    }
  }

  return (
    <div className="alya-text-input">
      {renderLabel()}

      <div className="alya-text-input__input-container">
        <input
          {...props}
          className={clsx('alya-text-input__input', props.className)}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          ref={ref}
          value={attribute.display || ''}
        />
      </div>
    </div>
  )
}))

export default TextInput

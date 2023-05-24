import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { ButtonContainer } from './styles'

export default function Button({
  children,
  type,
  loading,
  disabled = false,
  ...props
}) {
  const override = {
    marginRight: '10px',
    marginLeft: '10px'
  }

  return (
    <ButtonContainer type={type} disabled={disabled} {...props}>
      {loading && (
        <ClipLoader
          color="#14141A"
          loading={loading}
          size={15}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {children}
    </ButtonContainer>
  )
}

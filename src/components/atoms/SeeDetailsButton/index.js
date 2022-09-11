import React from 'react'
import { Btn } from './styles'

export default function SeeDetailsButton({ label, onClick }) {
  return (
    <Btn theme="dark" onClick={onClick}>
      {label}
    </Btn>
  )
}

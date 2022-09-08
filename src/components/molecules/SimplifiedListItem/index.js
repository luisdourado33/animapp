import React from 'react'
import { Card, CardContent } from './styles'

export default function SimplifiedListItem() {
  return (
    <Card>
      <CardContent className="content">
        <h1 className="title">Card title</h1>
        <p className="description">Description</p>
      </CardContent>
    </Card>
  )
}

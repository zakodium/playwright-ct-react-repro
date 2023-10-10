import React from 'react'

interface DisplayProps {
  text: string;
}

export function Display(props: DisplayProps) {
  const { text } = props;
  return <div>{text}</div>
}
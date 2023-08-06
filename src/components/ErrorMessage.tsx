import React from "react";

interface ErorrMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErorrMessageProps) {
  return (
    <p className='tex-center text-red-600'>{error}</p>
  )
}
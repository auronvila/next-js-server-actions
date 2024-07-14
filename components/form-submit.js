'use client'
import {useFormStatus} from 'react-dom'

export default function FormSubmit() {
  const {pending} = useFormStatus()

  if (pending) {
    return <h2>Creating Post...</h2>
  }
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  )
}

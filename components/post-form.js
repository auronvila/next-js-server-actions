'use client'
import {useFormState} from "react-dom";
import FormSubmit from "@/components/form-submit";

export default function PostForm({createPost}) {
  const [state, formAction] = useFormState(createPost, {})

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title"/>
        </p>
        <p className="form-control">
          <label htmlFor="image">Image File</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5"/>
        </p>
        {state.errors && <ul className={'form-errors'}>
          {state.errors.map(err => <li key={err}>{err}</li>)}
        </ul>}
        <p className="form-actions">
          <FormSubmit/>
        </p>
      </form>
    </>
  )
}

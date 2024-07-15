'use server'
import {storePost, updatePostLikeStatus} from "@/lib/posts";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

// using the method for server actions.
export
async function createPost(prevState, formData) {
  "use server";
  const title = formData.get('title');
  const image = formData.get('image');
  const content = formData.get('content');
  let errors = []

  if (!title || title.trim().length === 0) {
    errors.push('Title is required')
  }

  if (!title || title.trim().length === 0) {
    errors.push('Content is required')
  }

  if (!image || image.size === 0) {
    errors.push('Image is required')
  }

  if (errors.length > 0) {
    return {
      errors
    }
  }

  await storePost({
    imageUrl: '',
    title,
    content,
    userId: 1
  });

  // triggering this function because in production nextjs caches aggressively.
  revalidatePath('/feed', "layout")
  redirect('/feed')
}

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2)
  revalidatePath('/', "layout")
}

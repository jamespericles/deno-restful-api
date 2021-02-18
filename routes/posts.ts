import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import Post from '../models/post.ts'
import { v4 as uuid} from "https://deno.land/std@0.87.0/uuid/mod.ts";

const router = new Router()
 
// Retrieving all posts
router.get('/posts', async ({ response }: RouterContext) => {
    try {
      const posts = await Post.all()

      response.body = posts
    } catch (err) {
      console.log(err)
      response.body = { error: 'Something went wrong' }
      response.status = 500
    }
  })
  

// Create one post 
  router.post('/posts', async ({ request, response }: RouterContext) => {
    try {
      const { username, body } = await request.body().value
  
      const post = await Post.create({ username, body, uuid: uuid.generate() })
    
      response.body = post
    } catch (err) {
      console.log(err)
      response.body = { error: 'Something went wrong' }
      response.status = 500
    }
  })

// Update Post
router.put('/posts/:uuid', async ({ params, request, response }: any) => {
  const {username, body } = await request.body().value
  
  try {
    const post = await Post.where('uuid', params.uuid).first()

    if (!post) {
      response.body = { post: 'Post not found'}
      response.status = 404
      return
    }
    post.username = username
    post.body = body
    
    await post.update()

    response.body = post
  } catch (err) {
    console.log(err)
    response.body = { error: 'Something went wrong' }
    response.status = 500
  }
})

// Delete Post
router.delete('/posts/:uuid', async ({ params, response }: any) => {
  try {
    const post = await Post.where('uuid', params.uuid).first()

    if (!post) {
      response.body = { post: 'Post not found'}
      response.status = 404
      return
    }

    await post.delete()
    response.body = { message: 'Post delete successfully' }
  } catch (err) {
    console.log(err)
    response.body = { error: 'Something went wrong' }
    response.status = 500
  }
})


// Find Post
router.get('/posts/:uuid', async ({ params, response }: any) => {
  try {
    const post = await Post.where('uuid', params.uuid).first()

    if (!post) {
      response.body = { post: 'Post not found'}
      response.status = 404
      return
    }
    response.body = post
  } catch (err) {
    console.log(err)
    response.body = { error: 'Something went wrong' }
    response.status = 500
  }
})

  export default router 
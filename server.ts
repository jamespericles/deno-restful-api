import { Application, RouterContext } from "https://deno.land/x/oak/mod.ts";
import postsRouter from './routes/posts.ts'
import db from './db.ts'
import Post from './models/post.ts'

const app = new Application();

const port = 8000;

postsRouter.get('/api', (context: RouterContext) => {
  context.response.body = { message: "Hello World" }
})


app.use(postsRouter.routes())
app.use(postsRouter.allowedMethods())

console.log(`Server is listening on ${port}`)

db.sync();

console.log('Database Connected!')

await app.listen({ port: 8000 });
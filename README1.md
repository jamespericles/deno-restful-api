# deno-restful-api
Simple application that works with Deno, Oak, and DenoDB to create, store and make changes to posts in a local Mongo server

### Install denon
From your terminal, execute the following:
`deno install -qAf --unstable https://deno.land/x/denon/denon.ts`

Denon is essentially Deno's version of nodemon, and is a very handy tool when working with an app such as this one.
https://deno.land/x/denon@2.4.7

### Usage
To start the app, execute the following:
`denon run --allow-net --allow-read --allow-env server.ts`

Deno will automatically install all plugins imported in the application. You will also need to create and populate your own `.env` file to access your MongoDB instance.
As it is now, the application will create a database titled `posts` with a collection of the same name. 

There exists five different routes:
  1. GET route to retrieve all exists posts
  2. POST route to create a new post
  3. PUT route to update a post with a matching uuid
  4. DEL route to delete a post with a matching uuid
  5. GET route to find a post with a matching uuid
  
Other notable features include a typed MongoDB schema and randomly generated uuids, assigned to each newly created post.

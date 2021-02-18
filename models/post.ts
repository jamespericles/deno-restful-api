import { DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts';


class Post extends Model {
    static table = 'posts';
    static timestamps = true;
  
    static fields = {
      _id: { primaryKey: true, autoIncrement: true },
      uuid: { type: DataTypes.UUID },
      username: { type: DataTypes.STRING },
      body:{ type: DataTypes.STRING }, // by setting these as objects, it makes it so the data cannot be null
    };
  
  }

  export default Post

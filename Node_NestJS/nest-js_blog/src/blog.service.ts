import { PostDto } from './blog.model';

export class BlogService {
  posts: any = [];

  getAllPosts() {
    return this.posts;
  }

  createPost(postDto: PostDto) {
    const id = this.posts.length + 1;
    this.posts.push({ ...postDto, id: id.toString(), createDt: new Date() });
  }

  getPost(id) {
    const post = this.posts.find((post) => {
      return post.id === id;
    });
    console.log(post);
    return post;
  }

  delete(id) {
    const filteredPosts = this.posts.filter((post) => post.id !== id);
    this.posts = [...filteredPosts];
  }

  updatePost(id, postDto: PostDto) {
    let updateIndex = this.posts.findIndex((post) => post.id === id);
    const updatePost = { ...postDto, id, updateDt: new Date() };
    this.posts[updateIndex] = updatePost;
    return updatePost;
  }
}

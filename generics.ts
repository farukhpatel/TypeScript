const baseURL: string = "http://example.com/";

interface IPost {
  id: number;
  name: string;
  pageNumber: number;
}
interface IUser {
  id: number;
  name: string;
  age: number;
}

//for posts
const fetchPosts = async (path: string): Promise<IPost> => {
  const response = await fetch(`${baseURL}${path}`);
  return response.json();
};

//for users
const fetchUsers = async (path: string): Promise<IUser> => {
  const response = await fetch(`${baseURL}${path}`);
  return response.json();
};

//fetch both
const fetchBoth = async <responseType>(path: string): Promise<responseType> => {
  const response = await fetch(`${baseURL}${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchPosts("post/");
  const user = await fetchUsers("user/");
  const postsFromBoth = await fetchBoth<IPost>("post/");
})();
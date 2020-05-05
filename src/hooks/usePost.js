import useFetch from "./useFetchHook";

const usePosts = params => {
  return useFetch(`https://jsonplaceholder.typicode.com/posts${params}`);
};

export default usePosts;

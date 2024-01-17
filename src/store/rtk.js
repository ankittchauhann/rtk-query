import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = `${import.meta.env.VITE_API_URL}`;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `${baseURL}/posts`,
    }),
    getComments: builder.query({
      query: () => ({ url: `${baseURL}/comments`, params: {}, method: "GET" }),
    }),
    getPost: builder.query({
      query: (id) => `${baseURL}/posts/${id}`,
    }),
    getComment: builder.query({
      query: (id) => `${baseURL}/comments/${id}`,
    }),
    getUsers: builder.query({
      query: () => `${baseURL}/users`,
    }),
    getUser: builder.query({
      query: (id) => `${baseURL}/users/${id}`,
    }),
    getAlbums: builder.query({
      query: () => `${baseURL}/albums`,
    }),
    getAlbum: builder.query({
      query: (id) => {
        return { url: `${baseURL}/albums/${id}`, method: "GET" };
      },
    }),
    getPhotos: builder.query({
      query: () => `${baseURL}/photos`,
    }),
    getPhoto: builder.query({
      query: (id) => `${baseURL}/photos/${id}`,
    }),
    getTodos: builder.query({
      query: () => `${baseURL}/todos`,
    }),
    getTodo: builder.query({
      query: (id) => `${baseURL}/todos/${id}`,
    }),
    getPostsByUser: builder.query({
      query: (id) => `${baseURL}/posts?userId=${id}`,
    }),
    getPostCommets: builder.query({
      query: (id) => `${baseURL}/comments?postId=${id}`,
    }),
  }),
});

export const {
  useLazyGetPostQuery,
  useLazyGetPostsQuery,
  useLazyGetCommentQuery,
  useLazyGetCommentsQuery,
  useLazyGetUserQuery,
  useLazyGetUsersQuery,
  useLazyGetAlbumQuery,
  useLazyGetAlbumsQuery,
  useLazyGetPhotoQuery,
  useLazyGetPhotosQuery,
  useLazyGetTodoQuery,
  useLazyGetTodosQuery,
  useLazyGetPostsByUserQuery,
  useLazyGetPostCommetsQuery,
} = api;

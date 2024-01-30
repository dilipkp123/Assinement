// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// export const getAllPost = createAsyncThunk("posts/fetchPosts", async () => {
//   try {
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     return resp.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
// const initialState = {
//   posts: [],
// };

// export const postSlice = createSlice({
//   name: "Post",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.posts = state.posts.concat(action.payload);
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default postSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { signinUser, signupUser } from "./controllers";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      data: {},
      token: "",
    },
  },

  reducers: {
    // signupUser: (state, action) => {
    //   const token = async () => await postRequest("/signup", action.payload);
    //   state.user.token = token;
    //   console.log(token);
    // },
    // signinUser: (state, action) => {
    //   const token = async () => await postRequest("/signin", action.payload);
    //   state.user.token = token;
    //   console.log(token);
    // },
    // verifyUser: (state, action) => {
    //   try {
    //     const verify = async () => {
    //       const response = await fetch(
    //         import.meta.env.VITE_backend_url + "/verifyToken",
    //         {
    //           headers: { Authorization: `Bearer ${state.user.token}` },
    //         }
    //       );
    //       const status = await response.json();
    //       console.log(status);
    //     };
    //     verify();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.data = action.payload;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.data = action.payload;
      });
  },
});

// export const { signupUser, signinUser, verifyUser } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
  //reducer: {}, for many diff types of reducers
});
export type AppDispatch = typeof store.dispatch;

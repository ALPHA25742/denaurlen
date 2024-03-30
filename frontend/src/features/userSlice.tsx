import { createSlice, nanoid } from "@reduxjs/toolkit";

const request = async (path: string, payload: object) => {
  const res = await fetch(import.meta.env.VITE_backend_url + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      data: {},
      token: "",
    }, //it'll have data and token two objects
  },
  reducers: {
    signupUser: (state, action) => {
      const token = async () => await request("/signup", action.payload);
      // state.user.token = token;
    },
    signinUser: (state, action) => {
      const token = async () => await request("/signin", action.payload);
      // state.user.token = token;
    },
    verifyUser: (state, action) => {
      const verify = async () => {
        const response = await fetch(
          import.meta.env.VITE_backend_url + "/verifyToken",
          {
            headers: { Authorization: `Bearer ${state.user.token}` },
          }
        );
        const status = await response.json();
        console.log(status);
      };
      verify();
    },
  },
});

export const { signupUser, signinUser, verifyUser } = userSlice.actions;
export default userSlice.reducer;

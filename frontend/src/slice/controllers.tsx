import { createAsyncThunk } from "@reduxjs/toolkit";

const postRequest = async (path: string, payload: object) => {
  try {
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
  } catch (error) {
    return error;
  }
};

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (obj: object) => {
    try {
      const response = await postRequest("/signup", obj);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (obj: object) => {
    try {
      const response = await postRequest("/signin", obj);
      return response;
    } catch (error) {
      return error;
    }
  }
);

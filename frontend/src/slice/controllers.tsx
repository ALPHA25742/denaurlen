import { createAsyncThunk } from "@reduxjs/toolkit";

export default async function postRequest(path: string, payload: object) {
  try {
    const res = await fetch(import.meta.env.VITE_backend_url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
}

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (obj: object) => {
    try {
      return await postRequest("/signup", obj);
    } catch (error) {
      return error;
    }
  }
);
export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (obj: object) => {
    try {
      return await postRequest("/signin", obj);
    } catch (error) {
      return error;
    }
  }
);

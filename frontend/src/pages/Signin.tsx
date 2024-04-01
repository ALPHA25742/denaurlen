import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import postRequest from "../slice/controllers";
import { Link, useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().max(20).min(1, { message: "it cannot be empty" }).trim(),
  password: z.string().max(20).min(6).trim(),
});
type FormFeilds = z.infer<typeof schema>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFeilds>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFeilds> = async (data) => {
    try {
      // const result = await postRequest("/signin", data);
      // if (result !== "wrong password" && result !== "user doesnt exist") {
      // localStorage.setItem("denaurlen-token", JSON.stringify(result.token));
      navigate("/friends");
      // }
    } catch (error) {
      console.error(error);
      alert("something went wrong");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <h2>Connect & Collect..!</h2>
        <section>
          <input {...register("username")} type="text" placeholder="username" />
          {errors.username && <div>{errors.username.message}</div>}
          <input
            {...register("password")}
            type="password"
            placeholder="password"
          />
          {errors.password && <div>{errors.password.message}</div>}
        </section>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: "white",
            padding: "5px",
            margin: "20px",
            borderRadius: "5px",
            color: "black",
          }}
        >
          {isSubmitting ? "Loading..." : "Sign In"}
        </button>
      </form>
      <Link to="/signup">Are you new to Denaurlen? Sign up</Link>
    </>
  );
}

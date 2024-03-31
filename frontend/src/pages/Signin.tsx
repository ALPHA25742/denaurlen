import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { signinUser } from "../slice/controllers";
import { AppDispatch } from "../slice/userSlice";

const schema = z.object({
  username: z.string().max(20).min(1, { message: "it cannot be empty" }).trim(),
  password: z.string().max(20).min(6).trim(),
});
type FormFeilds = z.infer<typeof schema>;

export function SignIn() {
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFeilds>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log(data);
    dispatch(signinUser(data));
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

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Sign In"}
        </button>
      </form>
    </>
  );
}

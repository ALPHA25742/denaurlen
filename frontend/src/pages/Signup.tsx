import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { signupUser } from "../slice/controllers";
import { AppDispatch } from "../slice/userSlice";

const schema = z.object({
  firstName: z
    .string()
    .max(20)
    .min(1, { message: "it cannot be empty" })
    .trim(),
  lastName: z.string().max(20).min(1, { message: "it cannot be empty" }).trim(),
  email: z.string().email(),
  location: z.string().min(1, { message: "it cannot be empty" }).trim(),
  username: z.string().max(20).min(1, { message: "it cannot be empty" }).trim(),
  password: z.string().max(20).min(6).trim(),
});
type FormFeilds = z.infer<typeof schema>;

export function Signup() {
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFeilds>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFeilds> = (data: object) => {
    console.log(data);
    try {
      dispatch(signupUser(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <h2>Connect & Collect..!</h2>
        <section>
          <input
            {...register("firstName")}
            type="text"
            placeholder="firstname"
          />
          {errors.firstName && <div>{errors.firstName.message}</div>}
          <input {...register("lastName")} type="text" placeholder="lastname" />
          {errors.lastName && <div>{errors.lastName.message}</div>}
          <input {...register("email")} type="email" placeholder="email" />
          {errors.email && <div>{errors.email.message}</div>}
          <input {...register("location")} type="text" placeholder="location" />
          {errors.location && <div>{errors.location.message}</div>}
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
          {isSubmitting ? "Loading..." : "Sign up"}
        </button>
      </form>
    </>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { AppDispatch, registerUser } from "../slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import postRequest from "../slice/controllers";

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

export default function Signup() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFeilds>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFeilds> = async (data: object) => {
    try {
      // const result = await postRequest("check", data);
      // if (result == "user doesnt exist") {
      //   dispatch(registerUser(data));
      navigate("/interests");
      // } else alert(result);
    } catch (error) {
      alert(error);
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
          {isSubmitting ? "Loading..." : "Sign up"}
        </button>
      </form>
      <Link to="/signin">Already a member of Denaurlen? Sign in</Link>
    </>
  );
}

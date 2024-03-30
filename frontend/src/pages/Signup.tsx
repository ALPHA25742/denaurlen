import { useForm, SubmitHandler } from "react-hook-form";
type FormFeilds = {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  username: string;
  password: string;
};
export function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFeilds>();
  //useForm<FormFeilds>({defaultValues:{email:"",username:""}}) this way we can also pre-populate form with the feilds we want pre-populated
  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log(data);
    //if this would've been an async function we could have used setError("root",{message:"some error"}) and then display the error like we are displaying othe errors
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <h2>Connect & Collect..!</h2>
        <section>
          <input
            {...register("firstName", {
              required: "firstname is required",
              validate: (value) => {
                if (value.length >= 20) {
                  return "firstname should be less than 20 characters";
                }
                return true;
              },
            })}
            type="text"
            placeholder="firstname"
          />
          {errors.firstName && <div>{errors.firstName.message}</div>}
          <input
            {...register("lastName", {
              required: "lastnameis required",
              validate: (value) => {
                if (value.length >= 20) {
                  return "lastname should be less than 20 characters";
                }
                return true;
              },
            })}
            type="text"
            placeholder="lastname"
          />
          {errors.lastName && <div>{errors.lastName.message}</div>}
          <input
            {...register("email", {
              required: "email is required",
              validate: (value) =>
                value.includes("@") ? true : "email should include @",
            })}
            type="email"
            placeholder="email"
          />
          {errors.email && <div>{errors.email.message}</div>}
          <input
            {...register("location", { required: "location is required" })}
            type="text"
            placeholder="location"
          />
          {errors.location && <div>{errors.location.message}</div>}
          <input
            {...register("username", {
              required: "username is required",
              validate: (value) => {
                if (value.length >= 20) {
                  return "username should be less than 20 characters";
                }
                return true;
              },
            })}
            type="text"
            placeholder="username"
          />
          {errors.username && <div>{errors.username.message}</div>}
          <input
            {...register("password", {
              required: "password is required",
              validate: (value) => {
                if (value.length >= 20) {
                  return "password should be less than 20 characters";
                } else if (value.length < 6)
                  return "password should be at least 6 characters long";
                return true;
              },
            })}
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

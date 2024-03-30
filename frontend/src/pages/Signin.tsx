import { useForm, SubmitHandler } from "react-hook-form";
type FormFeilds = {
  username: string;
  password: string;
};
export function Signin() {
  const { register, handleSubmit } = useForm<FormFeilds>();
  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <h2>Connect & Collect..!</h2>
        <section>
          <input
            {...register("username")}
            type="text"
            placeholder="username"
            required
          />
          <input
            {...register("password", {
              validate: (value) => value.length >= 6,
            })}
            type="password"
            placeholder="password"
          />
        </section>

        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface IFormContents {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repassword: string;
  userName: string;
  extraError?: string;
}

const ToDoList = () => {
  // const test = useForm();
  // console.log(test);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormContents>();

  const onValid = (data: IFormContents) => {
    console.log(data);
    if (data.password !== data.password) {
      setError("password", { message: "Repassword is not the same..." });
      setError(
        "repassword",
        { message: "Password is not the same..." },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server Offline..." });
  };

  console.log(errors.email);

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Za-z0-9]+@google.com/gm,
            message: "Only google.com emails is allowed",
          },
        })}
        type="email"
        placeholder="@google로 입력해주세요"
      />
      <span>{errors.email?.message as string}</span>
      <input
        {...register("firstName", { required: true })}
        type="text"
        placeholder="First Name"
      />
      <span>{errors.firstName?.message as string}</span>

      <input
        {...register("lastName", {
          required: "Write Here",
          validate: (value) =>
            !value.includes("test") ? "No test Allowed" : true,
        })}
        type="text"
        placeholder="Last Name"
      />
      <span>{errors.lastName?.message as string}</span>

      <input
        {...register("userName", { required: true, minLength: 10 })}
        type="text"
        placeholder="User Name"
      />
      <span>{errors.userName?.message as string}</span>

      <input
        {...register("password", {
          required: "Password is 8 required",
          minLength: {
            value: 8,
            message: "8 word required",
          },
        })}
        type="password"
        placeholder="Password"
      />
      <span>{errors.password?.message as string}</span>

      <input
        {...register("repassword", { required: true, minLength: 8 })}
        type="password"
        placeholder="Re Password"
      />
      <span>{errors.repassword?.message as string}</span>

      <button>Add</button>
      <span>{errors.extraError?.message as string}</span>
    </Form>
  );
};

export default ToDoList;

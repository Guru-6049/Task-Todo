import React from "react";
import { useForm } from "react-hook-form";
import { styles } from "./Styles";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const password = watch("password");

  const onSubmit = (data) => {
    alert("Registration Successful");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <h2>Register</h2>

      {/* Name */}
      <input
        placeholder="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters"
          }
        })}
      />
      {errors.name && <p style={styles.error}>{errors.name.message}</p>}

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format"
          }
        })}
      />
      {errors.email && <p style={styles.error}>{errors.email.message}</p>}

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters"
          }
        })}
      />
      {errors.password && <p style={styles.error}>{errors.password.message}</p>}

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Passwords do not match"
        })}
      />
      {errors.confirmPassword && (
        <p style={styles.error}>{errors.confirmPassword.message}</p>
      )}

      <button type="submit" disabled={!isValid}>
        Register
      </button>
    </form>
  );
}



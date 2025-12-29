export function loginApi({ email, password }) {
  if (email === "admin@test.com" && password === "123456") {
    return {
      token: "fake-jwt-token",
      user: { name: "Admin" }
    };
  }

  throw new Error("Invalid email or password");
}

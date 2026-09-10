"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    localStorage.setItem(
      "minishop-user",
      JSON.stringify({
        email,
        type: "user",
      })
    );

    router.push("/products");
  }

  function continueAsGuest() {
    localStorage.setItem(
      "minishop-user",
      JSON.stringify({
        type: "guest",
      })
    );

    router.push("/products");
  }

  return (
    <main className="loginPage">
      <section className="loginCard">
        <p className="eyebrow">Welcome Back</p>

        <h1>Login</h1>

        <p className="loginDescription">
          Login to continue shopping or browse as a guest.
        </p>

        <form
          className="loginForm"
          onSubmit={handleLogin}
        >
          <div className="formGroup">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="formGroup">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />
          </div>

          {error && (
            <p className="formError">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="loginButton"
          >
            Login
          </button>
        </form>

        <div className="loginDivider">
          <span>or</span>
        </div>

        <button
          type="button"
          className="guestButton"
          onClick={continueAsGuest}
        >
          Continue as Guest
        </button>
      </section>
    </main>
  );
}
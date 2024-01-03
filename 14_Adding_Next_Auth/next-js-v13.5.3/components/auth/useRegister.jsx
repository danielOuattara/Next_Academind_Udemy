import { useState } from "react";

export function useRegister() {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  async function registerUser(url, payload) {
    try {
      setStatus((prevState) => ({
        ...prevState,
        loading: true,
        success: false,
        error: false,
        message: "",
      }));
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          message:
            `${response.status}: ${response.statusText}` ||
            "Something went wrong",
        }));
        throw new Error(
          `${response.status}: ${response.statusText}` ||
            "Something went wrong",
        );
      }

      const data = await response.json();
      setStatus((prevState) => ({
        ...prevState,
        loading: false,
        success: true,
        error: false,
        message: "User created successfully",
      }));

      return status;
    } catch (error) {
      console.log(error);
    }
  }

  return { status, registerUser };
}

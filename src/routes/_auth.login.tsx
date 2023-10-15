import { useLoaderData } from "react-router-dom";

// type User = {
//   status: boolean;
//   message: string;
//   data: {
//     id: number;
//     name: string;
//     email: string;
//     email_verified_at: null;
//     token: string;
//   };
//   pagination: string | null;
//   error: string | null;
// };

export async function loader() {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log(data);

  localStorage.setItem("token", data.token);

  return { userData: null };
}

export default function Login() {
  const { userData } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!userData) {
    return <p>Sorry, no user yet</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}

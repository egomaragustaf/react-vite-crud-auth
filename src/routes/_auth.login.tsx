import { useLoaderData } from "react-router-dom";

type User = {
  status: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    token: string;
  };
  pagination: string | null;
  error: string | null;
};

export async function loader() {
  const response = await fetch("https://test.employee.tokoweb.xyz/api/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      email: "admin@gmail.com",
      password: "admin",
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const userData = (await response.json()) as User;
  const token = userData.data.token;

  localStorage.setItem("token", token);

  return { userData };
}

export default function Login() {
  const { userData } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  console.log({ userData });

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

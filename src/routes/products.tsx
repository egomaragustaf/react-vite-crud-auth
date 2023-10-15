import { useLoaderData } from "react-router-dom";

type Products = {
  status: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    price: number;
  };
  pagination: number | null;
  error: string | null;
};

export async function loader() {
  const response = await fetch("https://test.employee.tokoweb.xyz/api/product");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const products = (await response.json()) as Products;

  return { products };
}

export default function Products() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  console.log({ products });

  if (!products) {
    return <p>Sorry, no user yet</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

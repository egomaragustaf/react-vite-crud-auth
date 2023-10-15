export async function loader() {
  const token = localStorage.getItem("token");

  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  });
  const data = await response.json();

  console.log(data);

  return { product: data };
}

export default function AddRoute() {
  return (
    <div>
      <form action=""></form>
    </div>
  );
}

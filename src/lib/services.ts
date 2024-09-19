const API_KEY = "https://msklinker.ru/api/public/products";
// const api = 'https://msklinker.ru/api/public/categories'

export async function getProducts() {
  const res = await fetch(API_KEY);

  if (!res.ok) throw Error("Failed getting products");

  const { content } = await res.json();
  return content;
}

export async function getDetails(id: string) {
  const res = await fetch(`${API_KEY}/${id}`);
  if (!res.ok) throw Error(`Couldn't find product #${id}`);

  const content = await res.json();
  return content;
}

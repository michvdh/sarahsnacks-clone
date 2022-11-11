export async function getAllProducts() {
  const response = await fetch('https://sarahsnacks-clone-default-rtdb.firebaseio.com/productsDB.json');

  const data = await response.json();

  return data;
}
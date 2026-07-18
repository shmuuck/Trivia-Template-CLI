// Fetching questions
export async function Fetching(amount = 5) {
  const Response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&type=multiple`
  );
  
  const data = await Response.json();

  return data.results;
  
}
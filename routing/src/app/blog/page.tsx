export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => resolve("delay"), 1000);
  });
  
  return <h1>My blog</h1>;
}

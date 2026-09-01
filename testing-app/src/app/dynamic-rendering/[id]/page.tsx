export default async function DynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>This is dynamic page with id {id}</div>;
}

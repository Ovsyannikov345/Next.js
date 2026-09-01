export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function ServerSitePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div>This is page with id {id}</div>;
}

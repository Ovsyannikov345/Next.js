// 404 if not in static params
export const dynamicParams = false;

export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
    const { id } = await params;

    return (
        <h1>
            Product {id} details rendered at {new Date().toLocaleTimeString()}
        </h1>
    );
}

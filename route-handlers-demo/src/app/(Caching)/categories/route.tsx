export const dynamic = "force-static";

export async function GET() {
    const categories = [
        { id: 1, name: "Cat 1" },
        { id: 2, name: "Cat 2" },
        { id: 3, name: "Cat 3" },
        { id: 4, name: "Cat 4" },
    ];

    return Response.json(categories);
}

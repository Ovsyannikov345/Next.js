import { comments } from "@/comments/data";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const comment = comments.find((c) => c.id === parseInt(id));

    if (!comment) {
        return new Response("Not found", {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }

    return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const body = await request.json();

    const { text } = body;

    const index = comments.findIndex((c) => c.id === parseInt(id));

    comments[index].text = text;

    return Response.json(comments[index]);
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const index = comments.findIndex((c) => c.id === parseInt(id));

    const deletedComment = comments[index];

    comments.splice(index, 1);

    return Response.json(deletedComment);
}

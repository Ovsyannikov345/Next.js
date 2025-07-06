export async function Reviews() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });

    return <div>Reviews</div>;
}

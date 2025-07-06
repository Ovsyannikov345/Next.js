import { notFound } from "next/navigation";

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  if (getRandomInt(2) === 1) {
    throw new Error("Loading error");
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 10000) {
    notFound();
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}

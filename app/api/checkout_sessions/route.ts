import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
const stripe = new Stripe("sk_test_51OFItjSJZrLg2V7v9syVSUioaCDUme0tsAyMH7oWpEu9CcjYNebtSaAGFgLrOpHgD2PrkrfV0Oy4LYARL4WNdSLN007N8LJHVF", {
  apiVersion: "2023-10-16",
});

type Item = {
  name:string,
  img:string,
  price:number,
  quantity:number
};

export async function POST(request: NextRequest) {
  const { items } = await request.json();

  if (request.method === "POST") {
    try {
      const checkoutSession = await stripe.checkout.sessions.create({
        line_items: items.map((item: Item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images:[item.img]
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        })),
        mode: "payment",
        success_url: `http://localhost:3000/home`,
        cancel_url: `http://localhost:3000/cart`,
    });
    // console.log(checkoutSession,'im here')
      return NextResponse.json({ url: checkoutSession?.url });
    } catch (err) {
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      NextResponse.json(errorMessage, { status: 500 });
    }
  }
}
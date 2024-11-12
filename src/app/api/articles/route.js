// src/app/api/news/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=a1297a7b31e44ab8beb64ad03daaec87`
  );
  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: response.status }
    );
  }
}

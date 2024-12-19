import { NextResponse } from "next/server";

const getTest = async () => {
  return NextResponse.json("he", { status: 200 });
};

export { getTest as GET };

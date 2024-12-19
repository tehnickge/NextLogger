import { NextRequest, NextResponse } from "next/server";

const GetGetways = async (req: NextRequest) => {

  return NextResponse.json({ kek: "lol" }, { status: 200 });
};

export { GetGetways as GET };

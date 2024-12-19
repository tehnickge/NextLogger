import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default nextConfig;

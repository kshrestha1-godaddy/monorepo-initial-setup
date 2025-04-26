"use client";

import { Button } from "@repo/ui/button";
import { Users } from "./components/Users";


export default function Page() {
  return (
    <div>
      <h1>Hello World from web  </h1>
      <Button onClick={() => alert("Button clicked")}>Click me</Button>

      <Users />

    </div>
  );
}

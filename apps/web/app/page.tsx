"use client";

import { Button } from "@repo/ui/button";

export default function Page() {
  return (
    <div>
      <h1>Hello World from web</h1>
      <Button onClick={() => alert("Button clicked")}>Click me</Button>
    </div>
  );
}

import React, { Fragment } from "react";
// import Hero from "./hero";
// import flower from "../public/flower.jpg";
import { db } from "./db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        className="flex justify-between items-center p-2 rounded"
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
      >
        <div>{snippet.title}</div>
        <div>view</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-2xl font-bold">Snippets</h1>

        <Link className="border p-2 rounded" href="/snippets/new">
          New{" "}
        </Link>
      </div>
      <div className="flex flex-col text-2xl gap-2 border">
        {renderedSnippets}
      </div>
      {/* <div>
        <Hero imgData={flower} imgAlt="kid" title="Kid" />
      </div> */}
    </div>
  );
}

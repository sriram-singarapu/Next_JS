import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteSnippet } from "@/app/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

async function showSnippetPage(props: SnippetShowPageProps) {
  console.log(props);

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex">
          <Link href={`${snippet.id}/edit`} className="p-2 m-1 border rounded">
            Edit
          </Link>

          <form action={deleteSnippetAction}>
            <button className="p-2 m-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export default showSnippetPage;

import { db } from "@/app/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/app/components/snippet-edit-form";

interface snippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: snippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}

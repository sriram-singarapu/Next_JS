import { db } from "@/app/db/index";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    //This is s server action
    "use server"; //next feature -- server action

    //check the user's inputs and make sure they are valid,

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // create a new record in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);

    //redirect the user back to root route
    redirect("/");
  }
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          ></input>
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;

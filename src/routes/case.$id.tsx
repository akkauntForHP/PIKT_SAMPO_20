import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseFile } from "@/components/case-file";
import { Shell } from "@/components/shell";
import { getCase } from "@/data/cases";

export const Route = createFileRoute("/case/$id")({
  head: ({ params }) => {
    const item = getCase(params.id);
    return {
      meta: [{ title: item ? `${item.code} — дело ${item.docket}` : "Дело не найдено" }],
    };
  },
  component: CasePage,
});

function CasePage() {
  const { id } = Route.useParams();
  const item = getCase(id);

  if (!item) {
    return (
      <Shell>
        <h1 className="font-serif text-3xl text-ink">Такого дела нет</h1>
        <Link to="/" className="mt-4 inline-flex min-h-11 items-center font-semibold text-seal">
          Вернуться к списку
        </Link>
      </Shell>
    );
  }

  return (
    <Shell>
      <CaseFile item={item} />
    </Shell>
  );
}

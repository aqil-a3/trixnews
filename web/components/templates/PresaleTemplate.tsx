import { Presale } from "@/@types/Posts";
import PresaleCard from "../presale-card";
import PresaleSubmissionForm from "../organisms/Presales/PresaleSubmissionForm";

export default function PresaleTemplate({ presales }: { presales: Presale[] }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ICO Presale List
        </h1>

        {presales.length === 0 ? (
          <p className="text-gray-500 text-center text-lg mb-12">
            No approved presales at the moment.
          </p>
        ) : (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Active Presales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {presales.map((presale) => (
                <PresaleCard key={presale.id} presale={presale} />
              ))}
            </div>
          </section>
        )}

        <section>
          <PresaleSubmissionForm />
        </section>
      </main>
    </div>
  );
}

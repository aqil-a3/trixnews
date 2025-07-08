import MainContainer from "@/components/layouts/MainContainer";

export default function DashboardTemplate() {
  return (
    <MainContainer>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-gray-600">Selamat datang di dashboard kamu.</p>
      </div>
    </MainContainer>
  )
}

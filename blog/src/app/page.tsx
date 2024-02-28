import { Header } from "@/components/header";
import { MenuPlate } from "@/components/menuPlate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <MenuPlate />
    </main>
  );
}

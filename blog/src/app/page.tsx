import { Caption } from "@/components/caption";
import { Header } from "@/components/header";
import { MenuPlate } from "@/components/menuPlate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
      <Header />
      <MenuPlate />
      <Caption text="Recent Articles" />
    </main>
  );
}

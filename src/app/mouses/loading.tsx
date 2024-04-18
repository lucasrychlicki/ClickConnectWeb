import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getMouses } from "../actions/mouses/get";

interface Mouse {
    id: number,
    nome: string,
    descricao: string,
    preco : string
  }

export default async function Loading() {

  const mouse: Mouse[] = await getMouses()

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <NavBar active="mouses" />

      <section className="bg-slate-900 rounded min-w-[500px] p-6 m-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold" >Mouses cadastrados</h2>
          <Link href="/categorias/new">
            <Button startContent={<Plus />} color="primary">novo mouse</Button>
          </Link>
        </div>

        <p>carregando...</p>

      </section>

    </main>
  );
}
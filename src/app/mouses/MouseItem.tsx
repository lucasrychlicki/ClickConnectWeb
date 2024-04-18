"use client"

import { DropDownActions } from "@/components/DropDownActions";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/mouses/destroy";
import { useRouter } from "next/navigation";

interface MouseItemProps {
    mouse: Mouse
}

export function MouseItem(props: MouseItemProps){
    const router = useRouter()
    const { mouse } = props

    function handleDelete(){
        toast.promise(
            destroy(mouse.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso!",
               error: "Erro ao excluir.",
             }
           );
    }

    return (
        <div key={mouse.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <span>{mouse.nome}</span>
                <span>{mouse.descricao}</span>
                <span>{mouse.preco}</span>
            </div>
           
            <DropDownActions 
                onEdit={() => router.push(`/mouse/${mouse.id}`)}
                onDelete={handleDelete} 
            />
        </div>
    )
}
'use client'

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

export function SubmitButton(){
    const { pending } = useFormStatus()

    return (
        <Button type="submit" color="primary" isLoading={pending}>
            cadastrar
        </Button>
    )
}
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LibroForm } from './libroForm'
import { getLibro } from '../libros.api'

type Props = {
    params: {
        id: number
    }
}

async function NewLibrosPage({params}:Props) {
    const libro = await getLibro(params.id)
  return (
    <div className='h-screen flex justify-center items-center'>
        <Card className='flex'>
            <div>
            <CardHeader>
                <CardTitle>
                   {params.id ? "Editar libro" : "Registrar libro"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <LibroForm libro={libro} />
            </CardContent>
            </div>
        </Card>
    </div>
  )
}

export default NewLibrosPage
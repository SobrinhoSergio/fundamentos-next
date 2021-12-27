import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Todos(){

    const router = useRouter();

    const todoId = router.query.todoId;

    return(
        <>
            <Link href="/">
                <a>Voltar</a>
            </Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>Comemtário: lá lá lá...
                <Link href={`/todos/${todoId}/comments/1`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>Comemtário: le le le...
                <Link href={`/todos/${todoId}/comments/2`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>Comemtário: li li li...
                <Link href={`/todos/${todoId}/comments/3`}>
                    <a>Detalhes</a>
                </Link>
            </p>
        </>
    );

}
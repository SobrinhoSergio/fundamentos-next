import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Comments(){

    const router = useRouter();

    const todoId = router.query.todoId;
    const commentId = router.query.commentId;

    return(
        <>
            <Link href={`/todos/${todoId}`}>
                <a>Voltar</a>
            </Link>
           <h1>Exibindo Comentário: {commentId}</h1>
           <p>Do Todo: {todoId}</p>
        </>
    );

}
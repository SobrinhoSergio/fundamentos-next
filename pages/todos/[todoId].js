import React from 'react';
import Link from 'next/link';

export async function getStaticProps(context) {

    const {params} = context;

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);

    const todo = await data.json();

    return {
        props: { todo },
    }

}

export async function getStaticPaths() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    
    const data = await response.json();
  
    const paths = data.map((todo) => {
      return {
        params: {
          todoId: `${todo.id}`,
        },
      }
    })
  
    return { paths, fallback: false }
  }

export default function Todos({todo}){


    return(
        <>
            <Link href="/todos">
                <a>Voltar</a>
            </Link>
            <h1>Exibindo o todo: {todo.id}</h1>
            <h3>texto: {todo.titulo}</h3>
            <p>Comemtário: lá lá lá...
                <Link href={`/todos/${todo.id}/comments/1`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>Comemtário: le le le...
                <Link href={`/todos/${todo.id}/comments/2`}>
                    <a>Detalhes</a>
                </Link>
            </p>
            <p>Comemtário: li li li...
                <Link href={`/todos/${todo.id}/comments/3`}>
                    <a>Detalhes</a>
                </Link>
            </p>
        </>
    );

}
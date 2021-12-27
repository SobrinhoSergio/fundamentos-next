import React from 'react';
import Link from 'next/link';

import styles from '../../styles/todos.module.css';

export async function getServerSideProps() {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos');

    const todos = await data.json()

    return {
        props: { todos },
    }
}

export default function Todos({todos}){

    return (
        <>
            <h1>Tarefas para fazer: </h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

        </>
    )

}
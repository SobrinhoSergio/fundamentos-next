import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {

    return (
        <main className={styles.home}>
            <h1>Página About</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </main>
    );
}
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Card } from 'antd';

import { ProForm, ProFormText } from '@ant-design/pro-components';

let ProPage = (data) => {
  return (
    <ProForm
      onInit={async (data) => console.log(data)}
      onFinish={async (values) => {
        console.log(values);
        // await fetch()
      }}
    >
      <ProFormText name="name" label="User" />
    </ProForm>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Support App</title>
      </Head>
      <ProPage
      <main className={styles.main}>
        <h1 className={styles.title}>Support</h1>

        <Card title="Cats">
          <div className={styles.grid}>
            <a href="#apps" className={styles.card}>
              <h3>Apps &rarr;</h3>
              <p>Install apps.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Software &rarr;</h3>
              <p>Software support!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </Card>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}

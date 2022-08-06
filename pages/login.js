import React, { useEffect } from 'react';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { NextRouter, useRouter } from 'next/router';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import styles from '../styles/Login.module.css'
import Head from 'next/head';

const LoginPage = () => {
    const {data: session, status} = useSession()
    const router = useRouter()

    if (status !== "loading" && status === "authenticated"){
        router.push('/')
    }

    return (
        <div>
                <Head>
                <title>Passion Videos</title>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className={`container ${styles.bodyLoginPage}`}>
        <div className="container-poster"></div>
        <div className="container-main">
            <div className="containerMain-header">
                <h1 className="mainHeader-title">Passion Video</h1>
                <p>
                    Sign in and take a look at all your favourite videos! 
                    Make friends with similar interests. Comment and debate.
                    You make it special. You make the community!
                </p>
            </div>
            <form action="" className="containerMain-form">

                <div className="mainForm-socialButtonsBox">
                    <Button className="w-full mb-2 bg-rose-600" onClick={() => signIn('google')} type="primary"> Sign in with Google</Button>
                    <Button className="w-full" onClick={() => signIn('github')} type="primary"> Sign in with Github</Button>
                </div>
            </form>
        </div>
        <div className="container-poster"></div>
    </div>
        </div>
    );
};

export default LoginPage;

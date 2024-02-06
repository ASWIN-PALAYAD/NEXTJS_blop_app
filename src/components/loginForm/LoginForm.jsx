'use client'

import { login } from '@/lib/actions';
import styles from './loginForm.module.css';
import {useFormState} from 'react-dom'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

const LoginForm = () => {

    const router = useRouter();
    const [state, formAction] = useFormState(login, undefined);

    // useEffect(()=>{
    //     state?.success && router.push('/login');
    // },[state?.success, router])
    
  return (
        <form action={formAction} className={styles.form}>
        <input className={styles.input} type="text"  placeholder="username" name="username" />
        <input className={styles.input} type="password"  placeholder="password" name="password" />
        <button className={styles.button} >Login</button>
        {state?.error}
        <Link href={'/register'}>
           {"Don't  have an account?"} <b>Register</b>
        </Link>
      </form>
  )
}

export default LoginForm
'use client'

import { register } from '@/lib/actions';
import styles from './registerForm.module.css';
import {useFormState} from 'react-dom'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

const RegisterForm = () => {

    const router = useRouter();
    const [state, formAction] = useFormState(register, undefined);

    useEffect(()=>{
        state?.success && router.push('/login');
    },[state?.success, router])
    
  return (
        <form action={formAction} className={styles.form}>
        <input className={styles.input} type="text"  placeholder="username" name="username" />
        <input className={styles.input} type="email"  placeholder="email" name="email" />
        <input className={styles.input} type="password"  placeholder="password" name="password" />
        <input className={styles.input} type="password"  placeholder="password again" name="passwordRepeat" />
        <button className={styles.button} >Register</button>
        {state?.error}
        <Link href={'/login'}>
            Have an account? <b>Login</b>
        </Link>
      </form>
  )
}

export default RegisterForm
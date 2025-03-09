'use client'

import 'tailwindcss-animate';
import { useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import useUserStore from '@/store/storeForm';
import InterpolatedAnimation from './testAnim';


const schema = z.object({
    email: z.string().email('Не корректный email'),
    login: z.string().min(3, "Логин должен содерать минимум 3 символа"),
    password: z.string().min(6, "Пароли должны совпадать"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ["confirmPassword"]
})

function Form() {
    
    const formik = useFormik({
        initialValues: {
            email: "",
            login: "",
            password: "",
            confirmPassword: "",
        }, 
        validationSchema: toFormikValidationSchema(schema),
        onSubmit: (value) => {
            try {
                console.log(value)
                createUser(value)
                alert('Good')
            } catch (e) {
                console.error(e)
            }
        },
        validateOnBlur: false,
        validateOnChange: false
    })

    const { createUser, users } = useUserStore()
    // // for button
    // const [open, setOpen] = useState<boolean>(false)

    const [goal, setGoal] = useState(350)

    return (
        <>

            {/* Form  */}

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        className='border-[1px] border-black'
                        type="email"
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                    {
                        formik.errors.email && (
                            <p>{formik.errors.email}</p>
                        )
                    }
                </div>
                <div>
                    <input 
                        className='border-[1px] border-black'
                        type="text"
                        name='login'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.login} />
                    {
                        formik.touched.login && formik.errors.login && (
                            <p>{formik.errors.login}</p>
                        )
                    }
                </div>
                <div>
                    <input 
                        className='border-[1px] border-black'
                        type="password"
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />
                    {
                        formik.touched.password && formik.errors.password && (
                            <p>{formik.errors.password}</p>
                        )
                    }
                </div>
                <div>
                    <input 
                        className='border-[1px] border-black'
                        type="password"
                        name='confirmPassword'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword} />
                    {
                        formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <p>{formik.errors.confirmPassword}</p>
                        )
                    }
                </div>
                <Button type='submit'>Зарегестрироваться</Button>
            </form>

            <Drawer>
        <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.email} - {user.login}
                    </li>
                ))}
            </ul>
        </DrawerContent>
    </Drawer>
    
    <InterpolatedAnimation />

            {/* Dialog example */}

            {/* <button onClick={() => setOpen(true)}>open dialog</button>
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Title</DialogTitle>
                        <DialogDescription>Desc</DialogDescription>
                    </DialogHeader>
                    <button onClick={() => setOpen(false)}>Close</button>
                </DialogContent>
            </Dialog> */}
        </>
    );
}

export default Form;
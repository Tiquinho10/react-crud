import style from './form.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup  from "yup"


export function Form(){
    const schema = yup.object({
        name : yup.string().required("campo obrigatorio").min(3,"voce precisa digitar no minimo 3 caracteres", ),
        surname : yup.string().required("campo obrigatorio"),
        password : yup.string().required("campo obrigatorio")
       })
    
    const {
        register,
        handleSubmit : onSubmit,
        watch,
        formState: { errors },
      } =  useForm({
        resolver: yupResolver(schema),
      });

       


     const handleSubmit = (data) => {
        alert('ok')
     console.log(data)
     }

    return (
        <form className={style.form} onSubmit={onSubmit(handleSubmit)}>
            <div className={style.formGroup}>
               <label htmlFor="name">Digite o seu nome</label>
               <input type="text" name="" id="name"
                {...register("name")}
               />
               <span className={style.error}>{errors?.name?.message}</span>
            </div>
            <div className={style.formGroup}>
               <label htmlFor="surname">Digite o seu apelido</label>
               <input type="text" name="" id="surname"
                 {...register("surname")}
               />
                <span className={style.error}>{errors?.surname?.message}</span>
            </div>
            <div className={style.formGroup}>
               <label htmlFor="password">Digite a sua senha</label>
               <input type="password" name="" id="password"
                 {...register("password")}
               />
                <span className={style.error}>{errors?.password?.message}</span>
            </div>

            <button type='submit'>Enviar</button>
        </form>

    )
}
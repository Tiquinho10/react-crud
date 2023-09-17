import { AppRouter } from "../../AppRoutes"
import style from './pageContent.module.css'

export function PageContent(){


    return (
        <>
          <main className={style.main}>
               <AppRouter />
          </main>
        </>
    )
}
import { AppRouter } from "../../AppRoutes"
import style from './pageContent.module.css'
import { ThemeProvider } from "../../context/ThemeContext"

export function PageContent(){


    return (
        <>
          <main className={style.main}>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
             
          </main>
        </>
    )
}
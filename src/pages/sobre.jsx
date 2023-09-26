import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Sobre(){
  const[theme, toggleTheme] = useContext(ThemeContext);

    return (
        <>
          <h1>Sobre</h1>
          <p>O tema atual e: {theme}</p>
          <p>Nossa História:
Fundado em 2010, o Restaurante Rumuka	Inc nasceu da paixão pela culinária e do desejo de criar um espaço acolhedor onde as pessoas pudessem se reunir para desfrutar de comida deliciosa e momentos especiais. Desde então, temos servido pratos incríveis e cativado o paladar dos nossos clientes.

Nossa Filosofia:
Acreditamos na importância de ingredientes frescos e locais, e nossa equipe de chefs talentosos está comprometida em criar pratos que despertem os sentidos e satisfaçam o paladar. Valorizamos a hospitalidade e buscamos proporcionar uma experiência memorável a cada cliente que nos visita.

</p>
        </>
    )
}
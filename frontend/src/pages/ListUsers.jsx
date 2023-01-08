import { HeaderCheck } from "../components/Header";
import { ListSectionStyle } from "../styles/sectionStyle";

import { BiPencil } from "react-icons/bi";
import { MdDeleteOutline } from 'react-icons/md';

const dataUser = [
    {
        id: 1,
        name: "Victor Garcia",
        phone: "(51) 90000-0000",
        email: "gmail@gmail.com"
    },
    {
        id: 2, 
        name: "Fulano de tal",
        phone: "(33) 90000-0000",
        email: "fulano@gmail.com"
    }
]



export const ListUsers = () => {

    return(
        <>
            <HeaderCheck />

            <ListSectionStyle>
                {dataUser.map((item) => (
                    <div
                        key={item.id}
                        className="container-user"
                    >
                        <div className="container-data">
                            <p className="paragraph-content">
                                <span className="atribute">Nome: </span>
                                {item.name}
                            </p>
                            <p className="paragraph-content">
                                <span className="atribute">Telefone: </span>
                                {item.phone}
                            </p>
                            <p className="paragraph-content">
                                <span className="atribute">Email: </span>
                                {item.email}
                            </p>
                        </div>

                        <aside className="container-actions">
                            <div>
                                <BiPencil className="icon-action" />
                                <p>Editar</p>
                            </div>

                            <div> 
                                <MdDeleteOutline className="icon-action"/>
                                <p>Excluir</p>
                            </div>
                            
                        </aside>
                    </div>
                ))}
            </ListSectionStyle>
        </>
    );
}
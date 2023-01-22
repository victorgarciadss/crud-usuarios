import { HeaderCheck } from "../components/Header";
import { ListSectionStyle } from "../styles/sectionStyle";

import { BiPencil } from "react-icons/bi";
import { MdDeleteOutline } from 'react-icons/md';
import { useCallback, useEffect, useState, useContext } from "react";

import axios from 'axios';
import { EditUser } from "../components/EditUser";

import { GlobalContext } from '../CreateContext';
import { CorrectMessage } from "../components/CorrectMessage";

import { DeleteUser } from "../components/DeleteUser";


export const ListUsers = () => {

    const { showMessage, confirm } = useContext(GlobalContext);
    const { editContainer, setEditContainer} = useContext(GlobalContext);

    const [usersList, setUsersList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(false);
    

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then(response => {
                setUsersList(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleEdit = useCallback((id) => {
        setEditContainer(true);
        setEditId(id);
    }, [setEditContainer]);

    const user = usersList.find(user => user.id === editId);

    const handleDelete = useCallback((id) => {
        setDeleteId(id);
        setDeleteMessage(true);
        setModalConfirm(true);
    }, [])
    
    return (
        <>
            <HeaderCheck />

            {showMessage && <CorrectMessage action={"atualizado"} />}
            {confirm && <CorrectMessage action={"excluído"} />}
            
            {deleteMessage &&
                 <DeleteUser
                    id={deleteId}
                    user={usersList}
                    setUsers={setUsersList}
                    modalConifrm={modalConfirm}
                    setModalConfirm={setModalConfirm}
                />
            }

            {editContainer && usersList &&
                <>
                    <EditUser
                        key={user.id}
                        usersList={usersList}
                        setUsersList={setUsersList}
                        id={user.id}
                        name={user.name}
                        phone={user.phone}
                        email={user.email}
                    />
                    
                </>

            }

            <ListSectionStyle editContainer={editContainer}>
                {usersList && usersList.map((item) => (
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
                            <div 
                                className="container-action"
                                onClick={() => handleEdit(item.id)}
                            >
                                <BiPencil className="icon-action" />
                                <p>Editar</p>
                            </div>

                            

                            <div 
                                className="container-action"
                                onClick={() =>handleDelete(item.id)}
                            >
                                <MdDeleteOutline className="icon-action" />
                                <p>Excluir</p>
                            </div>

                        </aside>
                    </div>
                ))}


            </ListSectionStyle>
        </>
    );
}
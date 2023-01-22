import { useEffect, useState, useContext } from "react"
import { ContainerEditStyle } from "../styles/ContainerModalStyle";

import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { GlobalContext } from '../CreateContext';



export const EditUser = (props) => {

    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        phone: props.phone,
        email: props.email
    });

    console.log(editValues.id);


    const navigate = useNavigate();
    const { setShowMessage } = useContext(GlobalContext);
    const { editContainer, setEditContainer } = useContext(GlobalContext);


    const handleChangeValues = (e) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [e.target.id]: e.target.value,
        }))
    }


    const HandleEditUser = (e) => {
        e.preventDefault();

        axios.put("http://localhost:5000/edit", {
            id: editValues.id,
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
        })
            .then(response => {
                console.log(response);
                const updatedUsersList = [...props.usersList];
                const index = updatedUsersList.findIndex(user => user.id === editValues.id);
                updatedUsersList[index] = {
                    id: editValues.id,
                    name: e.target.name.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value
                }
                props.setUsersList(updatedUsersList);
                setShowMessage(true);
                setEditContainer(false);
            })
            .catch(err => console.log(err));


    }

 

    return (
        <ContainerEditStyle>


            {editContainer && (
                <section>
                    <form onSubmit={HandleEditUser} >

                        <div className="container-edit-info">
                            <label htmlFor="name">Digite o novo nome:</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                className="input-edit"
                                onChange={handleChangeValues}
                            />
                        </div>

                        <div className="container-edit-info">
                            <label htmlFor="phone">Digite o novo Telefone:</label>
                            <br />
                            <input
                                type="text"
                                name="phone"
                                className="input-edit"
                                onChange={handleChangeValues}
                            />
                        </div>

                        <div className="container-edit-info">
                            <label htmlFor="email">Digite o novo email:</label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                className="input-edit"
                                onChange={handleChangeValues}
                            />
                        </div>

                        <div className="container-button">
                            <button className="action-button">Confirmar</button>
                        </div>


                    </form>

                    <div className="container-button">
                        <button className="action-button" onClick={() => setEditContainer(false)}>
                            Voltar
                        </button>
                    </div>
                </section>
            )}
        </ContainerEditStyle>
    )
}
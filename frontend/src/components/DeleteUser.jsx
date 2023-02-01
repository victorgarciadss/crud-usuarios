import axios from 'axios';
import { useContext, useState } from 'react';
import { GlobalContext } from '../CreateContext';
import { ContainerDeleteStyle } from '../styles/ContainerModalStyle';
import { CorrectMessageStyle } from '../styles/CorrectMessageStyle';


export const DeleteUser = ({ id, setUsers, modalConifrm, ...props }) => {

    const { setConfirm } = useContext(GlobalContext);


    const confirmDelete = () => {
        setConfirm(true);
        console.log(modalConifrm);
        props.setModalConfirm(true);

        axios.delete(`http://localhost:5000/delete/${id}`)
            .then(response => {
                console.log(response);
                setUsers((prevState) => prevState.filter((user) => user.id !== id));

            })
            .catch(err => console.log(err));

        props.setModalConfirm(false);
    }

    return (
        <>
            {modalConifrm && (
                <ContainerDeleteStyle>
                    <section className='container-confirm'>
                        <p>Você tem certeza que deseja fazer isso?</p>
                        <div className='container-button'>
                            <button className='button' onClick={() => props.setModalConfirm(false)}>
                                Voltar
                            </button>

                            <button className='button' onClick={confirmDelete}>
                                Confirmar
                            </button>
                        </div>
                    </section>
                </ContainerDeleteStyle>
            )}
        </>
    )

}
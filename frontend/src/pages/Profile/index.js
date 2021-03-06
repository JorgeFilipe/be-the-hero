import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Cso quew occorreu nao sei dfas das asd nd er svasf</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lablashara Xabariucantevas Descargassablabléshira</p>

                    <strong>VALOR:</strong>
                    <p>R$ 550,99</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Cso quew occorreu nao sei dfas das asd nd er svasf</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lablashara Xabariucantevas Descargassablabléshira</p>

                    <strong>VALOR:</strong>
                    <p>R$ 550,99</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Cso quew occorreu nao sei dfas das asd nd er svasf</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lablashara Xabariucantevas Descargassablabléshira</p>

                    <strong>VALOR:</strong>
                    <p>R$ 550,99</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>        
    );
}
import { useState } from "react";

import styles from './Formulario.module.css';

function Formulario() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [formularioVisivel, setformularioVisivel] = useState(false)

    const verificar = () => {
        const imc = peso / (altura * altura).toFixed(2)
        const imcDoUsuario = imc.toFixed(1)

        if (imcDoUsuario < 17.0) {
            return (
                <p>Esse é seu imc <strong>{imcDoUsuario}</strong> e você está muito abaixo do peso!</p>
            )
        }
        if (imcDoUsuario <= (17.0 && 18.5)) {
            return (
                <p>Esse é seu imc <strong>{imcDoUsuario}</strong> e você está abaixo do peso!</p>
            )
        }
        if (imcDoUsuario <= (18.5 && 24.9)) {
            return (
                <p>Esse é seu imc <strong>{imcDoUsuario}</strong> e você está no peso normal!</p>
            )
        }
        if (imcDoUsuario <= (25.0 && 29.9)) {
            return (
                <p>Esse é seu imc <strong>{imcDoUsuario}</strong> e você está acima do peso!</p>
            )
        }
        if (imcDoUsuario <= (30.0 && 34.9)) {
            return (
                <p>Esse é seu imc <strong>{imcDoUsuario}</strong> e você está na obesidade 1!</p>
            )
        }
        if (imcDoUsuario <= (35.0 && 39.9)) {
            return (
                <p>Esse é seu imc <strong>{imcDoUsuario}</strong> e você está na obesidade 2 (severa)!</p>
            )
        }
        if (imcDoUsuario > (40.0)) {
            return (
                <p>Esse é seu imc <strong>{imcDoUsuario}</strong> e você está na obesidade 3 (mórbida)!</p>
            )
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="number" placeholder="Digite seu Peso" onBlur={e => setPeso(Number(e.target.value))} className={styles.input} />
                <input type="number" placeholder="Digite sua Altura" onBlur={e => setAltura(parseFloat(e.target.value))} className={styles.input} />
                <button type="button" onClick={e => setformularioVisivel(true)} className={styles.button}>Verificar</button>
            </form>
            {formularioVisivel && (
                <div>
                    {verificar()}
                    <table className={styles.table}>
                        <caption>Tabela de referência</caption>
                        <thead>
                            <tr>
                                <th>
                                    Resultado
                                </th>
                                <th>
                                    Situação
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Abaixo de 17
                                </td>
                                <td>
                                    Muito abaixo do peso
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Entre 17 e 18.5
                                </td>
                                <td>
                                    Abaixo do peso
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Entre 18,5 e 24,9
                                </td>
                                <td>
                                    Peso normal
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Entre 25 e 29,9
                                </td>
                                <td>
                                    Acima do peso
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Entre 30 e 34,9
                                </td>
                                <td>
                                    Obesidade 1
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Entre 35 e 39,9
                                </td>
                                <td>
                                    Obesidade 2 (severa)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Acima de 40
                                </td>
                                <td>
                                    Obesidade 3 (mórbida)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Formulario
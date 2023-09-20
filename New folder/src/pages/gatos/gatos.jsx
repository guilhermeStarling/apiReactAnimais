import { useState } from 'react'
import { useEffect } from 'react'


function Gatos() {
    
    const [ gato, setGato ] = useState([])

    useEffect(() => {
        const buscarGato = async () => {
            const response = await fetch('http://raw.githubusercontent.com/lopesofia20/ApiAnimais/main/API.json')
            const data = await response.json()
            setGato(data)
        }
        buscarGato()
    }, [])
    
    return (
        
        <table >
            <h1>Gatos</h1>
            <tbody>
            <tr >
                {
                    gato.map( gato => (
                        
                            <td key={gato.id}>
                                <div>
                                    <nav><b>{gato.nome}</b></nav>
                                    <nav><b>Porte: </b>{gato.porte}</nav> 
                                    <nav><b>Especie: </b>{gato.especie}</nav>
                                    <nav><b>Distribuicao Geografica: </b>{gato.distribuicao_geografica}</nav>
                                </div>
                            </td>
                    ))
                }
            </tr>
            </tbody>
        </table>
            )
        }
        
        export default Gatos
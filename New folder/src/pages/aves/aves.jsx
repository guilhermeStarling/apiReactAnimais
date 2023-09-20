import { useState } from 'react'
import { useEffect } from 'react'


function Aves() {
    
    const [ aves, setAves ] = useState([])

    useEffect(() => {
        const buscarAves = async () => {
            const response = await fetch('http://raw.githubusercontent.com/lopesofia20/ApiAnimais/main/API.json')
            const data = await response.json()
            setAves(data)
        }
        buscarAves()
    }, [])
    
    return (
        
        <table >
            <h1>Aves</h1>
            <tbody>
            <tr >
            {
                    aves.map( aves => (
                        
                            <td key={aves.id}>
                                <div>
                                    <nav><b>{aves.nome}</b></nav>
                                    <nav><b>Porte: </b>{aves.porte}</nav> 
                                    <nav><b>Especie: </b>{aves.especie}</nav>
                                    <nav><b>Distribuicao Geografica: </b>{aves.distribuicao_geografica}</nav>
                                </div>
                            </td>
                           
                        
                    ))
                }
                </tr>
            </tbody>
        </table>
    )
}

export default Aves
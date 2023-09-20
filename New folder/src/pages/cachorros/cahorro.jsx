import { useState } from 'react'
import { useEffect } from 'react'


function Cachorro() {
    
    const [ cachorro, setCachorro ] = useState([])

    useEffect(() => {
        const buscarCachorro = async () => {
            const response = await fetch('https://raw.githubusercontent.com/lopesofia20/API/main/json.json')
            const data = await response.json()
            setCachorro(data)
        }
        buscarCachorro()
    }, [])
    
    return (
        
        <table >
            <h1>Cachorros</h1>
            <tbody>
            <tr >
                {
                    cachorro.map( cachorro => (
                        
                            <td key={cachorro.id}>
                                <div>
                                    <nav><b>{cachorro.nome}</b></nav>
                                    <nav><b>Porte: </b>{cachorro.porte}</nav> 
                                    <nav><b>Especie: </b>{cachorro.especie}</nav>
                                    <nav><b>Distribuicao Geografica: </b>{cachorro.distribuicao_geografica}</nav>
                                </div>
                            </td>
                    ))
                }
            </tr>
            </tbody>
        </table>
            )
        }
        
        export default Cachorro

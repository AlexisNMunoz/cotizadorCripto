/* eslint-disable react/prop-types */
import styled from "@emotion/styled"
import { useSelectMonedas } from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"
import { useEffect, useState } from "react"
import Error from "./Error"

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 20px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

function Formulario({ setMonedas }) {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas)
    const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas("Elige tu Criptomoneda", criptos)



    useEffect(() => {
        const consultarAPI = async () => {
            const URL_API = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(URL_API)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([moneda, criptoMoneda].includes("")) {
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptoMoneda
        })
    }

    return (
        <>
            {
                error && <Error><p>Todos los campos son requeridos</p></Error>
            }
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptoMoneda />
                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario
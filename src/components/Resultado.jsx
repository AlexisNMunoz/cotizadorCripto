/* eslint-disable react/prop-types */
import styled from "@emotion/styled"

const DivResultado = styled.div`
    color: #fff;
    font-family: "lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Texto = styled.p`
  font-size: 18px;
    span{
        font-weight:700 ;
    }

`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight:700 ;
    }
`

const Imagen = styled.img`
 display: block;
 width: 120px;
`

function Resultado({ cotizacion }) {
    const { PRICE, LASTUPDATE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL } = cotizacion

    return (
        <DivResultado>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="" />
            <div>
                <Precio>El precio es de:<span>{PRICE}</span></Precio>
                <Texto>Mayor precio en el dia:<span>{HIGHDAY}</span></Texto>
                <Texto>Menor precio en el dia:<span>{LOWDAY}</span></Texto>
                <Texto>Variacion en las ultimas 24hs:<span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion:<span>{LASTUPDATE}</span></Texto>
            </div>
        </DivResultado>
    )
}

export default Resultado
/* eslint-disable react/prop-types */
import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 2px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: "lato", sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 3px;
`

function Error({ children }) {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error
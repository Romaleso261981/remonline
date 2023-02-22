import { Field } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;

    @media (min-width: 768px) {
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 0.04em;
        color: #52555F;
        margin-right: 44px;
    
        & p{
            margin-left: 10px;
        }

        & svg {
        fill: #ffffff;
        stroke: #1D2E4A;
        stroke-width:25px;
        width: 20px;
        }
    }

    @media (min-width: 1280px) {
        margin-right: 32px;
    }
`

export const DivInput = styled.div`
`

export const Input = styled(Field)`
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    width: 100%;
    box-sizing: border-box;
`
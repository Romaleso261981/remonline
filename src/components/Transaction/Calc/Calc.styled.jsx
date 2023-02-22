import styled from "styled-components";

export const DivCalc = styled.div`
    display: flex;
    align-items: center;
    width: 183px;
    height: 44px;
    margin: 0 auto;
    margin-bottom: 80px;

    & fieldset {
        border: none;
    }

    @media (min-width: 768px) {
        width: 110px;
        margin-bottom: 0;
        margin: 0;
    }

    @media (min-width: 1280px) {
        width: 120px;
    }
`
export const DivCalcInput = styled.div`
    width: 125px;

    & input {
        height: 44px;
        box-sizing: border-box;
        padding-bottom: 12px;
        padding-left: 45px;
        font-size: 12px;
        border-radius: 22px 0 0 22px;
        border-top: 2px solid white; 
        border-bottom: 2px solid white; 
        border-right: 2px solid white; 
        border-left: 2px solid white;
    }

    @media (min-width: 768px) {
        width: 70px;

        & input {
            border: 2px solid red;
            padding-left: 20px;
            font-size: 12px;
            border-radius: 0;
            border-top: 2px solid #F5F6FB; 
            border-bottom: 2px solid #F5F6FB; 
            border-right: 0; 
            border-left: 0;
        }
    }

    @media (min-width: 1280px) {
        width: 80px;
        & input {
            padding-left: 30px;
        }
    }
`

export const DivCalcIcon = styled.div`
    box-sizing: border-box;
    width: 60px;
    height: 44px;
    display: flex;
    align-items: center;
    padding: 10px 16px 10px 16px;
    border-radius: 0 19px 19px 0;
    border-top: 2px solid white; 
    border-bottom: 2px solid white; 
    border-right: 2px solid white; 
    border-left: 1px solid white;
    
    & svg {
        fill: #ffffff;
        stroke: #1D2E4A;
        stroke-width:25px;
        width: 20px;
    }

    @media (min-width: 768px) {
        width: 45px;
        padding: 10px;
        border-top: 2px solid #F5F6FB; 
        border-bottom: 2px solid #F5F6FB; 
        border-right: 2px solid #F5F6FB; 
        border-left: 0;

        & svg {
            stroke: #52555F;
        }
    }

    @media (min-width: 1280px) {
    }
`
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const SectionContainer = styled.div`
    @media screen and (min-width: 701px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const TecnologyRectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const MyServicesContainer = styled.div`
    padding: 128px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;

    @media screen and (max-width: 700px){
        padding: 64px 0px;
    }
`

export const MyProjectsContainer = styled.div`
    padding: 128px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;

    @media screen and (max-width: 700px){
        padding: 64px 0px;
    }
`

export const ProjectsContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 601px) and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 64px;
    width: 140px;
    height: 60px;
`

export const Services = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 601px) and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

`
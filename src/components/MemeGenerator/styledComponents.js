// Style your components here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  margin: 0px;
  font-family: 'Roboto';
  font-size: 25px;
  padding-top: 25px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeadingForm = styled(Heading)`
  display: none;

  font-size: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ImageContainer = styled.div`
  width: 90%;
  height: 350px;
  background-image: url(${props => props.image});
  background-size: cover;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 20px;
    order: 1;
  }
`

export const FormContainer = styled.form`
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #7e858e;
`

export const Input = styled.input`
  width: 100%;
  border: solid 1px #d7dfe9;
  outline: none;
  height: 33px;
  border-radius: 5px;
  margin-top: 8px;
`

export const Select = styled.select`
  width: 100%;
  width: 100%;
  border: solid 1px #d7dfe9;
  outline: none;
  height: 33px;
  border-radius: 5px;
  margin-top: 8px;
`

export const Option = styled.option`
  font-family: 'Roboto';
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 120px;
  margin-top: 20px;
`

export const Content = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: ${props => props.size}px;
`

import styled from 'styled-components'
import { Thumbsup, Rocket } from '@styled-icons/octicons'

export const Wrapper = styled.section`
  align-items: center;
  background: ${({ theme }) => theme.container};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  margin-top: 16px;
  padding: 32px 16px;
`
export const Filters = styled.div`
  display: flex;
  align-items: center;
`
export const FiltersText = styled.p`
  font-size: 1.4em;
  margin-right: 16px;
`
export const IconPositive = styled(Thumbsup)`
  width: 36px;
  color: #5bbca2;
`
export const WrapperPositive = styled.div`
  display: flex;
  position: relative;
`
export const NumberPositive = styled.p`
  position: absolute;
  top: -10px;
  right: -5px;
  border: 2px solid #5bbca2;
  border-radius: 50%;
  padding: 5px;
  font-size: 1.2em;
  font-weight: 500;
  background-color: ${({ theme }) => theme.container};
`
export const IconDevelop = styled(Rocket)`
  width: 36px;
  color: #ebc86d;
`
export const WrapperDevelop = styled(WrapperPositive)`
  margin-left: 40px;
`
export const NumberDevelop = styled(NumberPositive)`
  right: -10px;
  border: 2px solid #ebc86d;
`
export const ButtonFilter = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.boderButtonFeedback};
  border-radius: 50%;
  padding: 10px;
`

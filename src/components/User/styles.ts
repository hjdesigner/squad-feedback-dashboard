import styled from 'styled-components'
import { Hubot } from '@styled-icons/octicons'

export const Wrapper = styled.section`
  align-items: center;
  background: ${({ theme }) => theme.container};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  margin-top: 16px;
  padding: 16px;
`
export const Name = styled.p`
  font-size: 2em;
  font-weight: 700;
`
export const Postion = styled(Name)`
  font-size: 1.7em;
  font-weight: 500;
`
export const Infos = styled.div``
export const WrapperIcon = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.border};
  display: flex;
  height: 60px;
  justify-content: center;
  margin-right: 16px;
  width: 60px;
`
export const Icon = styled(Hubot)`
  width: 36px;
`

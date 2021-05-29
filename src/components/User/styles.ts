import styled from 'styled-components'
import { Hubot } from '@styled-icons/octicons'

export const Wrapper = styled.section`
  margin-top: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.container};
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
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
  margin-right: 16px;
  border: 3px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`
export const Icon = styled(Hubot)`
  width: 36px;
`

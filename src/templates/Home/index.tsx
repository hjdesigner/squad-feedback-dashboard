import dynamic from 'next/dynamic'
import * as S from './styles'
import { Api } from '../../mock/api'

const User = dynamic(() => import('components/User'), { ssr: false })

const HomeTamplate = () => (
  <S.Wrapper>
    <h1>Home</h1>
    <User item={Api.user} />
  </S.Wrapper>
)

export default HomeTamplate

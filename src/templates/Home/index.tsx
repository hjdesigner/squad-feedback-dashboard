import dynamic from 'next/dynamic'
import * as S from './styles'
import { Api } from '../../mock/api'

const User = dynamic(() => import('components/User'), { ssr: false })
const Filter = dynamic(() => import('components/Filter'), { ssr: false })

const HomeTamplate = () => (
  <S.Wrapper>
    <User item={Api.user} />
    <Filter item={Api.filter} />
  </S.Wrapper>
)

export default HomeTamplate

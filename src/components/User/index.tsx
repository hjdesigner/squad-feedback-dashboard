import * as S from './styles'

export type UserProps = {
  item: {
    name: string
    lastname: string
    position: string
  }
}

const User = ({ item }: UserProps) => (
  <S.Wrapper>
    <S.WrapperIcon>
      <S.Icon />
    </S.WrapperIcon>
    <S.Infos>
      <S.Name>{`${item.name} ${item.lastname}`}</S.Name>
      <S.Postion>{item.position}</S.Postion>
    </S.Infos>
  </S.Wrapper>
)

export default User

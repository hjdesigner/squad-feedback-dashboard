import * as S from './styles'

export type FilterProps = {
  item: {
    positive: number
    develop: number
  }
}

const Filter = ({ item }: FilterProps) => (
  <S.Wrapper>
    <S.Filters>
      <S.FiltersText>Filtrar feedback:</S.FiltersText>
      <S.WrapperPositive>
        <S.NumberPositive>{item.positive}</S.NumberPositive>
        <S.ButtonFilter>
          <S.IconPositive />
        </S.ButtonFilter>
      </S.WrapperPositive>
      <S.WrapperDevelop>
        <S.NumberDevelop>{item.develop}</S.NumberDevelop>
        <S.ButtonFilter>
          <S.IconDevelop />
        </S.ButtonFilter>
      </S.WrapperDevelop>
    </S.Filters>
  </S.Wrapper>
)

export default Filter

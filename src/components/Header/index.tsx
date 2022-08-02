import * as S from './styles';

import logoImg from '../../assets/logo.svg';

import { Button } from '../Button'
import { IconCart, IconLocation } from '../../assets/icons';

export function Header() {
  return (
    <S.Container>
      <S.Content className='container'>
        <img src={logoImg} alt='Coffee Delivery' />
        <S.Actions>
          <Button>
            <IconLocation width='15' />
            Fortaleza - CE
          </Button>
          <Button width='44px' backgroundColor='var(--yellow-light)'>
            <IconCart />
          </Button>
        </S.Actions>
      </S.Content>
    </S.Container>
  )
}
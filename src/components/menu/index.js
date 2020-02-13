import React from 'react';
import {Container,Code,Nav,NavItem,NavText,SignOutButton,SignOutButtonText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Menu({translateY}) {
  return (
      <Container
      style={{
        opacity:translateY.interpolate({
          inputRange:[0,150],
          outputRange:[0,1]
        })
      }}>
        <Code>
        </Code>
        <Nav>
            <NavItem>
                <Icon name="help-outline" size={20} color="#fff"/>
                <NavText>Me ajuda</NavText>
            </NavItem>

            <NavItem>
                <Icon name="help-outline" size={20} color="#fff"/>
                <NavText>Perfil</NavText>
            </NavItem>

            <NavItem>
                <Icon name="help-outline" size={20} color="#fff"/>
                <NavText>Configurar Cartão</NavText>
            </NavItem>
            <NavItem>
                <Icon name="help-outline" size={20} color="#fff"/>
                <NavText>Configurações do app</NavText>
            </NavItem>
        </Nav>
        <SignOutButton onPress={()=>{}}>
            <SignOutButtonText>Sair</SignOutButtonText>
        </SignOutButton>
      </Container>
  );
}

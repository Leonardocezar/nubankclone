import React from 'react';
import {Container,Code,ImageCode,BankCode,AgencyCode,AccountCode,Nav,NavItem,NavText,SignOutButton,SignOutButtonText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import qrcode from '../../assets/images/qrcode.png';
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
          <ImageCode source={qrcode}/>
          <View style={{flexDirection:'row'}}>
            <BankCode>Banco </BankCode>
            <BankCode style={{fontWeight:'bold'}}>260 - Nu Pagamentos S.A.</BankCode>
          </View>
          <View style={{flexDirection:'row'}}>            
            <AgencyCode>Agencia </AgencyCode>
            <AgencyCode style={{fontWeight:'bold'}}>0001</AgencyCode>
          </View>
          <View style={{flexDirection:'row'}}>         
            <AccountCode>Conta </AccountCode>
            <AccountCode style={{fontWeight:'bold'}}>123456-0</AccountCode>
          </View>
        </Code>
        <Nav>
            <NavItem>
                <Icon name="help-outline" size={20} color="#fff"/>
                <NavText>Me ajuda</NavText>
            </NavItem>
            <NavItem>
                <Icon name="credit-card" size={20} color="#fff"/>
                <NavText>Pedir função débito</NavText>
            </NavItem>

            <NavItem>
                <Icon name="person" size={20} color="#fff"/>
                <NavText>Perfil</NavText>
            </NavItem>

            <NavItem>
                <Icon name="monetization-on" size={20} color="#fff"/>
                <NavText>Configurar NuConta</NavText>
            </NavItem>
            <NavItem>
                <Icon name="credit-card" size={20} color="#fff"/>
                <NavText>Configurar Cartão</NavText>
            </NavItem>
            <NavItem>
                <Icon name="business" size={20} color="#fff"/>
                <NavText>Pedir conta PJ</NavText>
            </NavItem>
            <NavItem>
                <Icon name="smartphone" size={20} color="#fff"/>
                <NavText>Configurções do app</NavText>
            </NavItem>
        </Nav>
        <SignOutButton onPress={()=>{}}>
            <SignOutButtonText>Sair</SignOutButtonText>
        </SignOutButton>
      </Container>
  );
}

import React from 'react';

import { Container,TabsContainer,TabItem,TabText}from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons' 

export default function Tabs({translateY}){
    return(
        <Container style={{
            transform:[{
                translateY:translateY.interpolate({
                    inputRange:[0,300],
                    outputRange:[0,30],
                    extrapolate:'clamp'
                })
            }],
            opacity:translateY.interpolate({
                inputRange:[0,380],
                outputRange:[1,0.3],
                extrapolate:'clamp'
            })
        }}>
        <TabsContainer>
            <TabItem>
                <Icon name="person-add" size={24} color="#fff"/>
                <TabText>Indicar amigos</TabText>
            </TabItem>
            <TabItem>
                <Icon name="smartphone" size={24} color="#fff"/>
                <TabText>Reccarga de celular</TabText>
            </TabItem>
            <TabItem>
                <Icon name="chat-bubble-outline" size={24} color="#fff"/>
                <TabText>Cobrar</TabText>
            </TabItem>
            <TabItem>
                <Icon name="arrow-downward" size={24} color="#fff"/>
                <TabText>Depositar</TabText>
            </TabItem>
            <TabItem>
                <Icon name="arrow-upward" size={24} color="#fff"/>
                <TabText>Transferir</TabText>
            </TabItem>
            <TabItem>
                <Icon name="swap-horiz" size={24} color="#fff"/>
                <TabText>Ajustar limite</TabText>
            </TabItem>
            <TabItem>
                <Icon name="help-outline" size={24} color="#fff"/>
                <TabText>Me Ajuda</TabText>
            </TabItem>
            <TabItem>
                <Icon name="view-column" size={24} color="#fff"/>
                <TabText>Pagar</TabText>
            </TabItem>

            <TabItem>
                <Icon name="lock" size={24} color="#fff"/>
                <TabText>Bloquear cartão</TabText>
            </TabItem>

            <TabItem>
                <Icon name="credit-card" size={24} color="#fff"/>
                <TabText>Cartão virtual</TabText>
            </TabItem>
        </TabsContainer>
        </Container>
    )
}
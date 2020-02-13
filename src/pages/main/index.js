import React from 'react'
import { View
} from 'react-native'
import Header from '../../components/header';
import Tabs from '../../components/tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Container,Content,Card,CardHeader,CardContent,CardFooter,Title,Description,Annotation} from './styles'
export default function Main(){
  return(
    <Container>
      <Header/>
      <Content>
        <Card>
          <CardHeader>   
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>      
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponivel</Title>
            <Description>R$ 185.138,99</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de R$ 2.298,11 recebida de João Carlos hoje às 17:27h
            </Annotation>
          </CardFooter>
        </Card>

      </Content>
      <Tabs/>
      </Container>
  )
}
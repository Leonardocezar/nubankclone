import React,{useState} from 'react'
import { View
} from 'react-native'
import Header from '../../components/header';
import Menu from '../../components/menu'
import Tabs from '../../components/tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Container,Content,Card,CardHeader,CardContent,CardFooter,Title,Description,Annotation} from './styles';
import  {Animated} from 'react-native';
import {PanGestureHandler,State} from 'react-native-gesture-handler';
export default function Main(){
  let offset = 0;
  const translateY = new Animated.Value(0);
  const [visibility, setVisibility] = useState(false)
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translationY:translateY
        }
      }
    ],
    { useNativeDriver:true },
  )
  function onHandlerStateChange(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const {translationY} =event.nativeEvent;
      offset+=translationY;
      if(translationY >= 100){
        opened = true;
      }else{
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset=0;
      }


      Animated.timing(translateY,{
        toValue:opened? 380 : 0,
        duration:200,
        useNativeDriver:true,
      }).start(()=>{
        offset=opened ? 380: 0
        translateY.setOffset(offset);
        translateY.setValue(0)
      });
    }
  }

  return(
    <Container>
      <Header/>
      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
          >
        <Card style={{
          transform:[{
            translateY:translateY.interpolate({
              inputRange:[-200,0,380],
              outputRange:[-50,0,380],
              extrapolate:'clamp'
            })
          }]
        }}>
          <CardHeader>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="attach-money" size={28} color="#666"/>
            <Title>Nu Conta</Title>
            </View>
            {visibility? 
              <Icon name="visibility-off" size={28} color="#666" onPress={()=>setVisibility(false)}/>
            :
              <Icon name="visibility" size={28} color="#666" onPress={()=>setVisibility(true)}/> 
            }     
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponivel</Title>
            {visibility?
            <Description>R$ 185.138,99</Description>
              : 
            <Description style={{backgroundColor:'#f7f7f7',color:'#f7f7f7',fontSize:13,width:130,height:28}}>R$ 185.138,99</Description>
            }
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de R$ 2.298,11 recebida de João Carlos hoje às 17:27h
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>

      </Content>
      <Tabs translateY={translateY}/>
      </Container>
  )
}
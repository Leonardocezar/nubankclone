import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {StyleSheet} from 'react-native';
export const Container = styled(Animated.ScrollView)`
    margin:0 30px;
    `;

export const Code = styled.View`
    padding:10px;
    align-self:center;
    align-items:center;
    justify-content:center;
`;
export const ImageCode = styled.Image`
    background:#fff;
    width:120px;
    height:120px;
    margin-bottom:10px;
`;
export const BankCode = styled.Text`
    color:#fff;
    font-size:15px;
`;
export const AgencyCode = styled.Text`
    color:#fff;
    font-size:15px;
`;
export const AccountCode = styled.Text`
    color:#fff;
    font-size:15px;
`;
export const Nav = styled.View`
    margin-top:30px;
    border-top-width:${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255,255,255,0.6);
`;

export const NavItem = styled.View`
    flex-direction:row;
    align-items:center;
    padding: 12px 0;
    border-bottom-width:${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255,255,255,0.6);
`;
export const NavText = styled.Text`
    font-size:15px;
    color:#fff;
    margin-left:20px;
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width:${StyleSheet.hairlineWidth}px;
    border-color:rgba(255,255,255,0.8);
    border-radius:4px;
    justify-content:center;
    align-items:center;
    padding:12px;
    margin-top:15px;
`;


export const SignOutButtonText = styled.Text`
    font-size:13px;
    color:#fff;
    font-weight:bold;
`;


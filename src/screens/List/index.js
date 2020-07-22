import React from 'react';
import {Container} from '../../components/Global';
import {Texto, Botao} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);
  return <Container></Container>;
};

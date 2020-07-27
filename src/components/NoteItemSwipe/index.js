import React from 'react';
import {ListaItemSwipe, Text, Delete} from './styles';

export default (props) => {
  return (
    <ListaItemSwipe>
      <Delete onPress={props.onDelete} underlayColor="#ff4444">
        <Text>Excluir</Text>
      </Delete>
    </ListaItemSwipe>
  );
};

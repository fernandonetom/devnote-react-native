import React from 'react';
import {ListaItemSwipe, Text, Delete} from './styles';

export default (props) => {
  return (
    <ListaItemSwipe>
      <Delete onPress={props.onDelete} underlayColor="#ff3333">
        <Text>Delete</Text>
      </Delete>
    </ListaItemSwipe>
  );
};

import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImage,
  CloseButton,
  CloseButtonImage,
} from './styles';
export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [newNote, setNewNote] = useState(true);

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setNewNote(false);
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, [list, route.params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: newNote ? 'Nova anotação' : 'Editar anotação',
      headerRight: () => {
        if (title !== '' && body !== '') {
          return (
            <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
              <SaveButtonImage source={require('../../assets/save.png')} />
            </SaveButton>
          );
        }
      },
      headerLeft: () => (
        <CloseButton underlayColor="transparent" onPress={handleClose}>
          <CloseButtonImage source={require('../../assets/close.png')} />
        </CloseButton>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newNote, title, body, navigation]);

  const handleSaveButton = () => {
    if (title !== '' && body !== '') {
      if (newNote) {
        dispatch({
          type: 'ADD_NOTE',
          payload: {
            title,
            body,
          },
        });
        navigation.goBack();
      } else {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            title,
            body,
          },
        });
        navigation.goBack();
      }
    } else {
      return Alert.alert('Atenção', 'Tem algum campo em branco', [
        {text: 'Vou corrigir'},
      ]);
    }
  };
  const handleClose = () => {
    navigation.goBack(0);
  };

  return (
    <Container>
      <TitleInput
        placeholder="Digite o título da anotação"
        placeholderTextColor="#CCC"
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoFocus={true}
      />
      <BodyInput
        placeholder="Digite os dados da anotação"
        placeholderTextColor="#CCC"
        multiline={true}
        textAlignVertical="top"
        value={body}
        onChangeText={(text) => setBody(text)}
      />
    </Container>
  );
};

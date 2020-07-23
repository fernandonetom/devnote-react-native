import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {Container} from '../../components/Global';
import {
  AddButton,
  AddButtonImage,
  NoNotes,
  NoNotesImage,
  NoNotesText,
  List,
} from './styles';

import NoteItem from '../../components/NoteItem';
import NoteItemSwipe from '../../components/NoteItemSwipe';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas anotações',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate('EditScreen')}>
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, [navigation]);

  const handleNotePress = (index) => {
    navigation.navigate('EditScreen', {
      key: index,
    });
  };
  const handleDeleteButton = (index, title) => {
    Alert.alert('Tem certeja?', `Você está prestes a excluir ${title}`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        onPress: () => {
          return dispatch({
            type: 'DEL_NOTE',
            payload: {
              key: index,
            },
          });
        },
        style: 'default',
      },
    ]);
  };

  return (
    <Container>
      {list.length > 0 && (
        <List>
          <SwipeListView
            data={list}
            renderItem={({item, index}) => (
              <NoteItem data={item} index={index} onPress={handleNotePress} />
            )}
            renderHiddenItem={({index, item}, items) => {
              return (
                <NoteItemSwipe
                  onDelete={() => {
                    items[index].closeRow();
                    handleDeleteButton(index, item.title);
                  }}
                />
              );
            }}
            leftOpenValue={100}
            disableLeftSwipe={true}
            keyExtractor={(item, index) => index.toString()}
          />
        </List>
      )}
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};

import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Container} from '../../components/Global';
import {
  AddButton,
  AddButtonImage,
  NoteList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from './styles';

import NoteItem from '../../components/NoteItem';

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);
  console.debug('Lista', list);
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

  return (
    <Container>
      {list.length > 0 && (
        <NoteList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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

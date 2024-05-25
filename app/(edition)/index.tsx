import React, { useEffect, useState } from 'react';
import { StyleSheet, RefreshControl, View } from 'react-native';
import MonthYear from '@/components/formSearch/monthAndYear';
import { ScrollView } from 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Text } from '@/components/Themed';
import { AlfabetoButton } from '@/components/libras_componentes/alfabeto-button';
import { router } from 'expo-router';
import { CreateButton } from '@/components/createData/create-Button';
import { searchAxiosGetWords } from '@/components/axios/searchAxiosGet';
import { searchByRoute } from '@/components/axios/searchByRote';

function App() {
  const [option, setData] = useState({});
  const [data, setDataFetch] = useState('');
  const [refreshing, setRefreshing] = useState(true);

  async function searchData() {
    const response = await searchByRoute('category');
    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
    searchData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={false} progressViewOffset={70} />
      }
    >
      <MonthYear></MonthYear>
      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: 20,
          width: '75%',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}
      >
        Categorias das Palavras
      </Text>
      <CreateButton
        router="createCategory"
        label="+ Incluir Categoria"
      ></CreateButton>
      <View style={styles.div}>
        <Text style={styles.labelCategory}>Alfabeto</Text>
        <View style={styles.borda}></View>
        <ScrollView style={styles.divDescription}>
          <Text style={styles.labelDescription}>
            Animais, seres vivos heterotróficos, compõem uma vasta e
            diversificada categoria biológica que abrange desde os pequenos e
            intrigantes microorganismos até as majestosas e imponentes criaturas
            dos oceanos e florestas.
          </Text>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2DA',
    width: 'auto',
    paddingVertical: 0,
  },
  labelCategory: {
    marginTop: 3,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    width: '75%',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#e7503b',
  },
  labelDescription: {
    alignSelf: 'center',
    textAlign: 'justify',
    fontSize: 15,
    width: '95%',
    color: 'black',
  },
  div: {
    width: '80%',
    height: 140,
    marginTop: 18,
    marginBottom: 30,
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#e7503b',
  },
  divDescription: {
    width: '98%',
    height: 220,
    marginTop: 3,
    marginBottom: 5,
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  borda: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 3,
    borderTopWidth: 2,
    borderTopColor: '#e7503b',
  },
});

export default gestureHandlerRootHOC(App);

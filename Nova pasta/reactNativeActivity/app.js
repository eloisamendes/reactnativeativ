import { FlatList, View, Text } from 'react-native';
const dados = [
 { id:'1', nome:'Item 1' },
 { id:'2', nome:'Item 2' }
];
export default function App() {
 return (
   <FlatList
     data={dados}
     keyExtractor={item => item.id}
     renderItem={({item}) => (
       <View style={{padding:10, margin:5, backgroundColor:'#ddd'}}>
         <Text>{item.nome}</Text>
       </View>
     )}
   />
 );
}


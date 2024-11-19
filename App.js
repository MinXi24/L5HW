import React from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  Button,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const shop = [
  {
    data: [
      {
        name: 'Crop',
        brand: 'H-H',
        imageUrl: 'https://down-sg.img.susercontent.com/file/cn-11134207-7qukw-lft1t4fmqs8u1b.webp',
      },
      {
        name: 'Crop v-neck',
        brand: 'H-H',
        imageUrl: 'https://down-sg.img.susercontent.com/file/47df02ab67dbeefc593acca99cb0f85c.webp',
      },
    ],
    category: 'Clothes',
    bgcolor: 'brown',
    icon: 'hanger',
  },
  {
    data: [
      {name: 'Casual Shoes', brand: 'Skechers', imageUrl: 'https://down-sg.img.susercontent.com/file/sg-11134201-7reor-m2m37bd3slja27.webp'},
      {name: 'Clarks black oily', brand: 'Skechers', imageUrl: 'https://down-sg.img.susercontent.com/file/sg-11134201-7repo-m2m2i6w3dp171d.webp'},
    ],
    category: 'Shoes',
    bgcolor: 'grey',
    icon: 'paw',
  },
  {
    data: [
      {name: 'Olivka Rhodes', brand: 'Olivka', imageUrl: 'https://down-sg.img.susercontent.com/file/sg-11134201-7reoe-m2g9cuvx0qeu37.webp'},
      {name: 'Freshwater', brand: 'CACAO', imageUrl: 'https://down-sg.img.susercontent.com/file/sg-11134207-7rbmv-lqo4dzi4izyc54.webp'},
    ],
    category: 'Accessories',
    bgcolor: 'pink',
    icon: 'heart',
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image
            source={{uri: item.imageUrl}}
            style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Name: {item.name}</Text>
          <Text style = {styles.brand}>Brand: {item.brand}</Text>
        </View>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SectionList
            sections={shop}
            renderItem={renderItem}
            renderSectionHeader={({section: {category, bgcolor, icon}}) => (
                <View style={[styles.sectionHeader, {backgroundColor: bgcolor}]}>
                  <Text style={styles.sectionTitle}>{category}</Text>
                  {icon && <Icon name={icon} size={24} color="#fff" style={styles.sectionIcon} />}
                </View>
            )}
        />
        <Button
            title="Add To Cart"
            onPress={() => {
              alert('Added To Cart!');
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    borderColor: 'black',
  },
  itemContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  name: {
    fontSize: 16,
    textAlign: 'left'
  },
  brand: {
    fontSize: 12,
    color: 'darkred',
    textDecorationLine: 'underline',
  },
  image: {
    width: 150,
    height: 140,
    marginLeft: 10,
  },
});

export default App;

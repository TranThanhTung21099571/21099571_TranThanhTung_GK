import { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Screen01({ navigation }) {
    const [medicine, setMedicine] = useState([
        {
            key: 1, name: 'Amoxicillin', price: 199.99, start: 4.9,
            description: 'Used to treat infections such as respiratory tract injections, ear injections...',
            image: require('../assets/image/anh04.png')
        },
        {
            key: 2, name: 'Paracetamol', price: 199.99, start: 4.9,
            description: 'Used to alleviate mild to moderate pain such as headaches, toothaches...  ',
            image: require('../assets/image/anh05.png')
        },
        {
            key: 3, name: 'Amoxicillin', price: 199.99, start: 4.9,
            description: 'Used to treat infections such as respiratory tract injections, ear injections...',
            image: require('../assets/image/anh07.png')
        },
        {
            key: 4, name: 'Amoxicillin', price: 199.99, start: 4.9,
            description: 'Used to treat infections such as respiratory tract injections, ear injections...',
            image: require('../assets/image/anh08.png')
        },
        {
            key: 5, name: 'Amoxicillin', price: 199.99, start: 4.9,
            description: 'Used to treat infections such as respiratory tract injections, ear injections...',
            image: require('../assets/image/anh05.png')
        },
        {
            key: 6, name: 'Amoxicillin', price: 199.99, start: 4.9,
            description: 'Used to treat infections such as respiratory tract injections, ear injections...',
            image: require('../assets/image/anh07.png')
        },
    ]);
    const [medicine2, setMedicine2] = useState([])
    // useEffect(() => {
    //     fetch('https://671b7a102c842d92c3802177.mockapi.io/Medicine')
    //         .then(r => r.json())
    //         .then(data => setMedicine(data))
    // }, []);
    return (
        <ScrollView>
            <View style={style.container}>
                <View style={style.headerContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={style.inputContainer}>
                            <Image style={{ width: 20, height: 20, marginLeft: 10, }} source={require('../assets/image/anh01.png')}></Image>
                            <TextInput style={{ flex: 1, }} placeholder="Medicine, Hospital, Doctor, etc..."></TextInput>
                        </View>
                        <View style={{ marginTop: 10, marginRight: 10, }}>
                            <TouchableOpacity style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#17affd', borderRadius: 100, }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../assets/image/anh02.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                    <Image style={{ width: '90%', height: 150, borderRadius: 10, }} source={require('../assets/image/anh03.png')}></Image>
                </View>
                <View style={{ marginLeft: 10, marginRight: 10, }}>
                    <View>
                        <Text style={{ color: '#17affd', fontSize: 23, fontWeight: 'bold' }}>Hello, Yael Amari!</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: '#a5a5a5', }}>We have some additional suggestions for you</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#17affd' }}>See all</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20, }}>
                    <FlatList data={medicine} renderItem={({ item }) => (
                        <View style={{ flex: 1, marginLeft: 20, marginBottom: 20, }}>
                            <Image style={{ width: '80%', borderRadius: 10, marginBottom: 10, }} source={item.image}></Image>
                            <Text style={{ fontSize: 19, fontWeight: '400' }}>{item.name}</Text>
                            <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignItems: 'center', }}>
                                <Text style={{ color: '#17affd' }}>${item.price}</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Image style={{ width: 20, height: 20, marginRight: 5, }} source={require('../assets/image/anh06.png')}></Image>
                                    <Text>{item.start}</Text>
                                </View>
                            </View>
                            <Text style={{ width: '90%', color: '#a5a5a5', fontSize: 15, marginBottom: 10, }}>{item.description}</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#17affd' }}>Read More</Text>
                            </TouchableOpacity>
                        </View>
                    )} numColumns={2}>
                    </FlatList>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        width: '70%',
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#d4d4d4',
        borderRadius: 30,
        height: 35,
        alignItems: 'center',
        marginLeft: 20,
    },
    headerContainer: {

    }
});
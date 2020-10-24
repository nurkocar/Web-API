import axios from 'axios';
import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';

const Main = (props) => {

    const [userData, setUserData] = useState([]);

    const fetchData_Then = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => {
            console.log(data);
            setUserData(data);
        })
    }

    const fetchData_Await = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUserData(data);
    }

    function promiseFunction(num){
        return new Promise((resolve, reject) => {
            if(num > 5){
                resolve('Sayi besten buyuk!');
            }
            else{
                reject('Sayi besten kucuk..')
            }
        })
    }

    const checkNumber = () => {
        promiseFunction(10)
            .then(response => {
                console.log('response: ');
                console.log(response);
            })
            .catch(error => {
                console.log('error: ');
                console.log(error);

            })

        console.log(result);
    }

    
    return (
        <SafeAreaView>
            <View>

                <Button
                    title='Fetch Data Then'
                    onPress={fetchData_Then}
                />

                <Button
                    title='Fetch Data Await'
                    onPress={fetchData_Await}
                />

                <Button
                    title='Check Number'
                    onPress={checkNumber}
                />

                <FlatList
                    data = {userData}
            renderItem = {({item}) => <Text>{item.name}</Text>}
                
                />
            </View>

        </SafeAreaView>
    );
}

export default Main;
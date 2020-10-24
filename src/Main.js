import axios from 'axios';
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Main = (props) => {

    const fetchData_Then = () => {
        
        //let myData = [];

        console.log('starting then fetch..');

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
                //myData = response.data;
                //console.log(myData) // Burada yazarsak array i goruruz
            })

        //console.log(myData) // Burada bos bir array aliriz cunku henuz response tamamlanmamistir    
        console.log('end then fetch..');
    }

    const fetchData_Await = async () => {
        console.log('starting await fetch..')
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        console.log('end await fetch..')
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Main</Text>
                <Button
                    title='Fetch Data Then'
                    onPress={fetchData_Then}
                />
                <Button
                    title='Fetch Data Await'
                    onPress={fetchData_Await}
                />
            </View>

        </SafeAreaView>
    );
}

export default Main;
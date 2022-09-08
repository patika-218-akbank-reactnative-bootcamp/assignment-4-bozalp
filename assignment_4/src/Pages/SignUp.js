import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Toolkits/userSlice';
import TextBox from '../Components/TextBox';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {

    const theme = useSelector((state) => state.theme.theme);
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [email, setMail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordAgain, setPasswordAgain] = useState(null);
    const [username, setUsername] = useState(null);

    function SaveAndGoNextPage() {
       /* const newUser = [
            users.email = "email",
            users.password = "password",
            users.username = "username",
        ]

        //users = dispatch(setUser(newUser));
        Alert.alert(typeof users);*/
        navigation.navigate("Home");
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Sing Up</Text>
            <View style={{ margin: 10, }}>
                <View style={styles.textbox}>
                    <TextBox title="E-Mail" value={email} onChangeText={setMail} />
                </View>
                <View style={styles.textbox}>
                    <TextBox title="Password" value={password} onChangeText={setPassword} />
                </View>
                <View style={styles.textbox}>
                    <TextBox title="Password(Again)" value={passwordAgain} onChangeText={setPasswordAgain} />
                </View>
                <View style={styles.textbox}>
                    <TextBox title="User Name" value={username} onChangeText={setUsername} />
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.button, { borderColor: theme.color, backgroundColor: '#19c790' }]}
                onPress={() => SaveAndGoNextPage()}>
                <Text style={{ color: theme.color, textAlign: 'center' }}>
                    Login
                </Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding: 10,
        },
        header:
        {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            paddingBottom: 50,
            paddingTop: 50,
        },
        button:
        {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 20,
            height: 50,
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center'
        },
        textbox:
        {
            paddingBottom: 10,
        }
    }
);
export default SignUp;

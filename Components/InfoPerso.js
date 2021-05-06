import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles/styleConnect' 

export default function InfoPerso(props){
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="C.I.N"
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength={12}
                onChangeText= {(text) => {
                                {props.tableau.cin=Number(text)}
                            }}
            />
            {props.children}
            <TouchableOpacity
                style={styles.button}
                onPress={props.inscription}
            >
                <Text style={styles.textButton}>{props.button1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={props.retour}
            >
                <Text style={styles.textButton}>{props.button2}</Text>
            </TouchableOpacity>    
        </View>
    )
}
                   
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Header from '@/components/header'

export default function staffprofile() {
	return (
		<View style={styles.contains}>
            <Header />
			<View style={styles.main}>
                <Text style={styles.title}>Staff Profile</Text>
            </View>
            <View style={styles.bottomwrapper}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
		</View>
	)
}

const styles=StyleSheet.create({
    contains: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    main: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 60,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomwrapper: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
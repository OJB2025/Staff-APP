import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Header from '@/components/header'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { logout } from '../../store/store'

export default function staffprofile() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <View style={styles.contains}>
            <Header />
            <View style={styles.main}>
                <Text style={styles.title}>Staff Profile</Text>
                <View style={styles.main_content}>
                    <View style={styles.avatar}>                        
                    </View>
                    <View>
                        <Text style={styles.staff_name}>{user.name || 'No Name'}</Text>
                    </View>
                    <View>
                        <Text style={styles.staff_role}>{user.role || ''}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomwrapper}>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
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
        alignItems: 'center',
    },
    main_content: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#ccc',
        marginBottom: 20,
    },
    staff_name: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',       
    },
        staff_role: {
        marginTop: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        flexDirection: 'row',
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
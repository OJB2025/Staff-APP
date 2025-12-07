import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../components/header'
import Checkbox from 'expo-checkbox';

export default function orderform() {
    const [isIceChecked, setisIceChecked] = React.useState(false);
    const [isIceCubesChecked, setisIceCubesChecked] = React.useState(false);
    const [isIceChestChecked, setisIceChestChecked] = React.useState(false);
  return (
    <View style={styles.container}>
        <Header />
        <View style= {styles.main}>
            <View style= {styles.welcomewrapper}>
                <Text style={styles.welcometext}>Create Order</Text>
            </View>
            <View style={styles.formfield}>
                <TextInput style={styles.input} placeholder="Customer Name" placeholderTextColor="#0f0e0eff" />
            </View>
            <View style={styles.subtitle}>  
                <Text style={styles.subtitletext}>Item</Text>
            </View>
            <View style={styles.checkboxlist}>
                <View style={styles.checkboxitem}>
                    <Checkbox
                    value={isIceChecked}
                    onValueChange={setisIceChecked}
                    color={isIceChecked ? '#007AFF' : undefined}
                    />
                    <Text>Ice Blocks</Text></View>
                <View style={styles.checkboxitem}   >
                    <Checkbox
                    value={isIceCubesChecked}
                    onValueChange={setisIceCubesChecked}
                    color={isIceCubesChecked ? '#007AFF' : undefined}
                    />
                    <Text>Ice Cubes</Text></View>
                <View style={styles.checkboxitem} >
                    <Checkbox 
                    value={isIceChestChecked}
                    onValueChange={setisIceChestChecked}
                    color={isIceChestChecked ? '#007AFF' : undefined}
                    />
                    <Text>Ice Chest Rentals</Text></View>
            </View>
      <View style={styles.inputfield}>
        <Text style={styles.label}>Delivery Date</Text>
        <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
      </View>
      <View style={styles.inputfield}>
        <Text style={styles.label}>Delivery Time</Text>
        <TextInput style={styles.input} placeholder="hh:mm" />
      </View>
      <View style={styles.inputfield}>
        <Text style={styles.label}>Delivery Venue</Text>
        <TextInput style={styles.input} placeholder="Enter Venue" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit Order</Text>
      </TouchableOpacity>
      
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
    },
    main: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    welcomewrapper: {
        width: '100%',
    },
    welcometext: {
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        color: '#000',
    },
    subtitle: {
        marginTop: 30,
    },
    subtitletext: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    formfield: {
        marginTop: 20,
    },
    checkboxlist: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    checkboxitem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15,
        height: 40,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 10,
        color: '#000',
        
    },
    inputfield: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
//     wellywrapper: {
//         width: '100%',
//     },
//     welcometext: {
//         width: '100%',
//         height: '10%',
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginTop: 40,
//         marginRight: 200,
//     },
//     productwrapper: {
//         flex: 0,
//         width: '100%',
//         height: '20%',
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginTop: 40,
//     },
//     delivery: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginTop: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginTop: 10,
//         paddingLeft: 10,
//         borderRadius: 10,
        
//     }
// })
import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Header from '@/components/header'

export default function salesrecords() {

    const product_list = [
        { name: 'Ice Blocks', quantity: 80, amount: 50 },
        { name: 'Ice Cubes', quantity: 5, amount: 50 },
        { name: 'Ice Chest', quantity: 4, amount: 50 },
    ];
	return (
		<View style={styles.contains}>
            <Header />
            <View style={styles.main}>
			<Text style={styles.title}>Sales Records</Text>

		    <View style={styles.table_header}>
                <Text style={styles.header_row}>Invoice Number: </Text>
                <Text style={styles.header_row}>Date: </Text>
            </View>
            <View>
                <Text style={styles.records}>Client: </Text>
            </View>
            <View style={styles.table_header}>
                <Text style={styles.header_row}>Items Ordered: </Text>
                <Text style={styles.header_row}>Unit Amount </Text>
                <Text style={styles.header_row}>Subtotal </Text>
            </View>
            
            <View>
                <View>
                    {product_list.map((product, index) => (
                        <View key={index} style={styles.item_row}>
                            <Text style={styles.item_list}>{product.name} x {product.quantity}</Text>
                            <Text style={styles.item_list}>${product.amount}</Text>
                            <Text style={styles.item_list}>${product.amount * product.quantity}</Text>
                        </View>
                    ))}
                    <View>
                        <View style={styles.item_row}>
                            <Text style={styles.total_list}>Total </Text>
                            <Text style={styles.total_list}>${product_list.reduce((total, product) => total + (product.amount * product.quantity), 0)}</Text>
                        </View>
                    </View>
                </View>
                
                
            </View>
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 40,
        flexDirection: 'row',
    },
    records: {
        fontSize: 18,  
        padding: 20,
        borderRadius: 10,
    },
    order: {
        fontSize: 18,  
        backgroundColor: '#6691edff',
    },
    product: {
        fontSize: 18,  
    },
    table_header: {
        width: '100%',
        flexDirection: 'row',
        fontSize: 18,  
        backgroundColor: '#6691edff',
        padding: 20,
        justifyContent: 'space-between',
    },
    header_row: {
        fontSize: 18,  
    },
    item_row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    item_list: {
        fontSize: 18,
    },
    total_list: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
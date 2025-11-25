
/*the goal of this page(11/20) 
- search a player
- display the player name and/or player card
- send you to SearchDetail page
*/

import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import players from "../src/data/players.json";

const SearchScreen = ({navigation}) => {
    const [query, setQuery] = useState("");

    //includes lowercase word search 
    //Example: 'lebron' will show Lebron as well as 'LeBron'
    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <View style={{flex: 1, padding: 16}}>
        <TextInput
         placeholder="Search for a player..."
         value={query}
         onChangeText={setQuery}
         style={{
            padding: 12,
            borderWidth: 1,
            borderRadius: 8,
            marginBottom: 16
        }}
       />
         <FlatList
            data={filteredPlayers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PlayerDetail", {playerID: item.id})}
                style = {{padding: 12, borderBottomWidth: 1 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.team}</Text>
                </TouchableOpacity>
            )}
        />
        </View>
    );
};


export default SearchScreen;
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


//home screen with link to player search page 

export default function Home(){
    return (
        <>
        <Stack.Screen 
            options={{
            title: "Box Score Watchers",        
            headerShown: true
        }}
      />
        <View> 

         <Link href = "/players/search" style ={styles.link}>
         Search Your Favorite Player*search pending*
        </Link>

        <Text>"Will have the highlights, scores, etc. below"</Text>  
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
    link: { fontSize: 20, color: "blue" }
});
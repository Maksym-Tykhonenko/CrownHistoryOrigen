import { View } from "react-native"
import Favs from "../components/Favs"

const FavsScreen = () => {
    return (
        <View style={styles.container}>
            <Favs />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default FavsScreen;
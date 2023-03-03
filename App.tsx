import { Button, Text, View } from "react-native";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";
import AntDesign from "react-native-vector-icons/AntDesign";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.primary, fontSize: fonts.size.xxlg }}>
        Hello I'm croko22
      </Text>
      <Button title="Click me" onPress={() => alert("Hello")} />
      <AntDesign name="home" size={30} color={colors.primary} />
    </View>
  );
};

export default App;

import Constants from "expo-constants";
import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textError: "#ff0000",
    primary: "#0366d6",
    backgroundBarColor: "#1E202B",
    backgroundMainColor: "#e1e4e8",
    whiteColor: "#FFFFFF",
    blueColor: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  padding: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 5,
    small: 5,
    medium: 10,
    large: 15,
  },
  margin: {
    small: 5,
    medium: 10,
    large: 15,
  },
  borderRadius: {
    small: 5,
    medium: 10,
    large: 15,
  },
};

export default theme;

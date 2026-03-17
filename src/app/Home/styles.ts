import { COLORS } from "@/theme/colors";
import { Animated, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.background.primary,
  },
  headerContent: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    paddingTop: 62,
    paddingBottom: 24
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    gap: 8,
    marginTop: 42
  }
});
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
  },
  content: {
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.background.elevated,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  textEmptyList: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.muted,
    marginTop: 32,
    alignSelf: 'center',
  }
});
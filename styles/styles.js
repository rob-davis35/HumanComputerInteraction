import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#E5E7EB", // light grey
  },

  // LOGIN/SIGNUP SCREEN STYLES
  loginStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  inputContainer: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  loginButton: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

  loginButtonText: {
    color: "white",
    fontWeight: "700",
  },

  signUpText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 14,
    color: "#374151",
  },

  signUpButton: {
    alignItems: "center",
    marginTop: 8,
    textDecorationLine: "underline",
  },

  sUText: {
    color: "#2563EB",
    fontWeight: "600",
  },

  appBar: {
    height: 64,
    backgroundColor: "#F3F4F6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D1D5DB",
  },

  appBarTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
  },

  backButton: {
    marginRight: 8,
  },

  backArrow: {
    fontSize: 22,
  },

  grid: {
    paddingBottom: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47%",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 8,
    marginBottom: 16,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  cardImagePlaceholder: {
    height: 90,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  cardX: {
    fontSize: 24,
    color: "#D1D5DB",
  },

  cardLabel: {
    textAlign: "center",
    fontSize: 14,
  },

  // listing styles
  list: {
    paddingBottom: 16,
  },

  listItem: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    marginBottom: 12,
    padding: 8,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  listImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  listTextContainer: {
    flex: 1,
  },

  listTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },

  listPrice: {
    fontSize: 13,
    marginBottom: 2,
  },

  listMeta: {
    fontSize: 12,
    color: "#4B5563",
  },

  bottomNav: {
    height: 64,
    backgroundColor: "#93C5FD",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 4,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  navIcon: {
    fontSize: 20,
    opacity: 0.7,
  },

  navLabel: {
    fontSize: 11,
    opacity: 0.7,
    marginTop: 2,
  },

  navIconActive: {
    opacity: 1,
    fontWeight: "700",
  },

  navLabelActive: {
    opacity: 1,
    fontWeight: "600",
  },

  navIndicator: {
    marginTop: 4,
    width: 16,
    height: 2,
    borderRadius: 999,
    backgroundColor: "#1D4ED8",
  },

  // FILTER STYLES
  filterButton: {
    backgroundColor: "#93C5FD",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },

  filterIcon: {
    fontSize: 14,
    color: "#1D4ED8",
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  filterModal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    maxWidth: 400,
  },

  filterTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#374151",
  },

  filterOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  filterOptionText: {
    fontSize: 16,
    color: "#374151",
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#2563EB",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  checkmark: {
    fontSize: 16,
    color: "#2563EB",
    fontWeight: "700",
  },

  closeFilterButton: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },

  closeFilterText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  // ITEM MODAL STYLES (for listing detail popup)
  itemModal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "85%",
    maxWidth: 400,
  },

  itemModalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#374151",
    textAlign: "center",
  },

  itemModalImage: {
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#F9FAFB",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingVertical: 8,
  },

  quantityLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },

  quantityPicker: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#F9FAFB",
  },

  quantityButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#E5E7EB",
  },

  quantityButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#374151",
  },

  quantityValue: {
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 20,
    color: "#374151",
  },

  itemModalInfo: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 8,
  },

  addToBasketButton: {
    backgroundColor: "#10B981",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },

  addToBasketText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
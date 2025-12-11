import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#E5E7EB", // light grey
  },

  //START PAGE STYLES
  startPageMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 30,
    borderBottomWidth: 15,
    borderBottomColor: '#0257ffff',
    backgroundColor: '#fff',
  },

  startPageMenuIcon: {
    fontSize: 24,
    marginRight: 12,
    width: 35,
  },

  startPageMenuText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },

  startPageMenuArrow: {
    fontSize: 24,
    color: '#9CA3AF',
  },

  // LOGIN/SIGNUP SCREEN STYLES
  loginStyle: {
    flex: 1,
    padding: 24,
  },

  loginHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },

  loginImage: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },

  loginTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
  },

  inputContainer: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
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

  signUpContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
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

  //VALIDATION MESSAGE STYLES
  validationMessage: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },

  validationMessageText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  //RADIO BUTTON STYLES
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    marginBottom: 12,
    marginTop: 12,
  },

  radio: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    marginRight: 20,
  },

  activeRadio: {
    opacity: 0.6,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    marginRight: 20,
  },

  radioText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#374151",
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
  width: '100%',           
  height: 90,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#D1D5DB",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 6,
  overflow: 'hidden',     
  backgroundColor: '#F9FAFB',  
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

  // BASKET PAGE STYLES
  basketList: {
    paddingBottom: 80, // Space for finish button
  },

  emptyBasket: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },

  emptyBasketText: {
    fontSize: 18,
    color: "#9CA3AF",
    fontWeight: "500",
  },

  basketItem: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    marginBottom: 12,
    padding: 12,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  basketItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  basketItemInfo: {
    flex: 1,
  },

  basketItemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#374151",
  },

  basketItemPrice: {
    fontSize: 15,
    marginBottom: 4,
    color: "#374151",
  },

  basketItemMeta: {
    fontSize: 13,
    color: "#6B7280",
  },

  basketItemActions: {
    justifyContent: "space-around",
    alignItems: "center",
  },

  amendButton: {
    backgroundColor: "#FEF3C7",
    padding: 8,
    borderRadius: 6,
    marginBottom: 8,
    width: 44,
    alignItems: "center",
  },

  amendButtonText: {
    fontSize: 20,
  },

  deleteButton: {
    backgroundColor: "#FEE2E2",
    padding: 8,
    borderRadius: 6,
    width: 44,
    alignItems: "center",
  },

  completeOrderButton: {
    backgroundColor: "#dcfcd3ff",
    padding: 8,
    borderRadius: 6,
    width: 44,
    alignItems: "center",
  },

  deleteButtonText: {
    fontSize: 20,
  },

  finishPayButton: {
    backgroundColor: "#86EFAC",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },

  finishPayText: {
    color: "#065F46",
    fontWeight: "700",
    fontSize: 18,
  },

  updateButton: {
    backgroundColor: "#10B981",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },

  updateButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  // SETTINGS MENU STYLES
  settingsButton: {
    padding: 8,
  },

  settingsIcon: {
    fontSize: 24,
  },

  settingsModal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '70%',
    maxWidth: 300,
  },

  settingsModalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#374151',
    textAlign: 'center',
  },

  settingsMenuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  settingsMenuItemLast: {
    borderBottomWidth: 0,
  },

  settingsMenuItemText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
  },

  signOutText: {
    color: '#DC2626',
    fontWeight: '600',
  },

  // LANGUAGE MODAL STYLES
  languageModal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    maxHeight: '70%',
  },

  languageModalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#374151',
    textAlign: 'center',
  },

  languageList: {
    maxHeight: 400,
  },

  languageItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  languageItemText: {
    fontSize: 16,
    color: '#374151',
  },

  closeLanguageButton: {
    backgroundColor: '#6B7280',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },

  closeLanguageText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  // ACCOUNT/MORE PAGE STYLES
  accountMenuContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 8,
    overflow: 'hidden',
  },

  accountMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#fff',
  },

  accountMenuIcon: {
    fontSize: 24,
    marginRight: 12,
    width: 30,
  },

  accountMenuText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },

  accountMenuArrow: {
    fontSize: 24,
    color: '#9CA3AF',
  },

  signOutContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  signOutButtonLarge: {
    backgroundColor: '#DC2626',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  signOutButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  // SHOP FRONT PAGE STYLES
  shopFrontMenuContainer: {
    borderRadius: 10,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  shopFrontMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#black',
    backgroundColor: '#abe6adff',
  },

  shopFrontMenuIcon: {
    fontSize: 24,
    marginRight: 12,
    width: 30,
  },

  shopFrontMenuText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },

  shopFrontMenuArrow: {
    fontSize: 24,
    color: '#9CA3AF',
  },

  // ACCOUNT SETTINGS STYLES
  settingsForm: {
    paddingBottom: 24,
  },

  profileIconContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },

  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#93C5FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileIconText: {
    fontSize: 40,
  },

  formSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },

  formSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#374151',
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 8,
  },

  updateAccountButton: {
    backgroundColor: '#86EFAC',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },

  updateAccountButtonText: {
    color: '#065F46',
    fontWeight: '700',
    fontSize: 16,
  },

  // ORDER HISTORY STYLES
  ordersList: {
    paddingBottom: 16,
  },

  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  orderDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },

  orderStatusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },

  orderStatusDelivered: {
    backgroundColor: '#D1FAE5',
  },

  orderStatusCompleted: {
    backgroundColor: '#DBEAFE',
  },

  orderStatusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#065F46',
  },

  orderItems: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
  },

  orderSeller: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },

  orderFooter: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 8,
    marginTop: 8,
  },

  orderTotal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'right',
  },

  // PAYMENT METHODS STYLES
  paymentMethodsList: {
    paddingBottom: 16,
  },

  paymentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',        // ← ADD THIS
    alignItems: 'center',        // ← ADD THIS
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    borderWidth: 1,              // ← ADD THIS
    borderColor: '#E5E7EB',      // ← ADD THIS
  },

  paymentCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,             // ← CHANGE from 12 to 4
    justifyContent: 'space-between',  // ← ADD THIS
  },

  paymentCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },


  paymentCardIconText: {
    fontSize: 24,
  },

  paymentCardInfo: {
    flex: 1,
  },

  paymentCardType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 2,
  },

  paymentCardNumber: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },

  paymentCardExpiry: {
    fontSize: 12,
    color: '#9CA3AF',
  },

  defaultBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  defaultBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1D4ED8',
  },

  paymentCardActions: {
    flexDirection: 'row',
    gap: 8,
  },

  setDefaultButton: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  setDefaultButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },

  removeCardButton: {
    flex: 1,
    backgroundColor: '#FEE2E2',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  removeCardButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC2626',
  },

  addPaymentButton: {
    backgroundColor: '#E5E7EB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },

  addPaymentButtonIcon: {
    fontSize: 24,
    marginRight: 8,
    color: '#374151',
  },

  addPaymentButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },

  paymentCardArrow: {
    fontSize: 24,
    color: '#9CA3AF',
    marginLeft: 8,
  },

  paymentModalCardIcon: {
    fontSize: 80,
  },

  setDefaultButtonLarge: {
    backgroundColor: '#E5E7EB',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },

  setDefaultButtonTextLarge: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },

  removeCardButtonLarge: {
    backgroundColor: '#FEE2E2',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  removeCardButtonTextLarge: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
  },


  // HELP & SUPPORT STYLES
  helpSupportContent: {
    paddingBottom: 24,
  },

  helpSection: {
    marginBottom: 24,
  },

  helpSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#374151',
  },

  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  contactIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  contactIconText: {
    fontSize: 24,
  },

  contactInfo: {
    flex: 1,
  },

  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 2,
  },

  contactValue: {
    fontSize: 14,
    color: '#6B7280',
  },

  contactArrow: {
    fontSize: 24,
    color: '#9CA3AF',
  },

  hoursCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  hoursText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },

  faqCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  faqQuestion: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },

  faqAnswer: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },

  // STOREFRONT/ORDER STYLES <---- down here bc i deleted them before mb  
  completeOrderButton: {
    backgroundColor: "#d6fec7ff",
    padding: 8,
    borderRadius: 6,
    marginBottom: 8,
    width: 44,
    alignItems: "center",
  },

  contactCustomerButton: {
    backgroundColor: "#E5E7EB",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black"
  },

  contactCustomerText: {
    fontSize: 15,
    alignContent: "center",
    marginLeft: 12,
    marginTop: 4,
    marginBottom: 4,
    color: "#374151",
  },

  orderSeller: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },

  orderFooter: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 8,
    marginTop: 8,
  },

  // NEW LISTING STYLES
  descriptionInput: {
    backgroundColor: "#ffff",
    padding: 12,
    height: 120,
    borderRadius: 8,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  newListingContainer: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
    marginBottom: 15,
  },

  photoPriceContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  photoColumn: {
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
  },

  photoText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },

  photoImage: {
    width: 45,
    height: 45,
    marginTop: 9,
  },

  priceColumn: {
    flexDirection: "column",
    width: "50%",
  },

  priceLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },

  priceInput: {
    backgroundColor: "#ffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  // DATE PICKER STYLES
  dateInputWrapper: {
    width: "100%",
    marginBottom: 16,
  },

  dateButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  dateLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
    marginTop: 8,
  },

});
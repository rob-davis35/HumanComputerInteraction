import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import ValidationMessage from '../../components/validationMessage';
import { styles } from '../../styles/styles';

export default function SignUpPage({ onStart }) {
    const router = useRouter();

    const [listingName, setListingName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [amendQuantity, setAmendQuantity] = useState(1);

    const createListing = () => {
        showMessage("success", "Listing Created");

        if (listingName.length === 0) {
            showMessage("warning", "Please enter a listing name");
            return;
        }

        if (description.length === 0) {
            showMessage("warning", "Please enter a product description");
            return;
        }

        if (isNaN(price) || price.length === 0) {
            showMessage("warning", "Please enter a price");
            return;
        }

        // Clear all inputs
        setListingName("");
        setDescription("");
        setPrice("");
        setAmendQuantity(1);
        return;
    };

    const incrementQuantity = () => {
        setAmendQuantity(amendQuantity + 1);
    };

    const decrementQuantity = () => {
        if (amendQuantity > 1) {
            setAmendQuantity(amendQuantity - 1);
        }
    };

    const handleBack = () => {
        router.replace('/(shop)/storeDetails');
    }

    // Validation message state
    const [validationMessage, setValidationMessage] = useState(false);
    const [validationText, setValidationText] = useState("");
    const [validationType, setValidationType] = useState("error");

    const showMessage = (type, text) => {
        setValidationType(type);
        setValidationText(text);
        setValidationMessage(true);
    };

    // Simple sign up validation
    const handleSignUp = (firstName, lastName, email, phoneNumber, password, accountType) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !lastName) {
            showMessage("warning", "First and Last name cannot be empty.");
            return;
        }

        if (!emailRegex.test(email)) {
            showMessage("warning", "Please enter a valid email address.");
            return;
        }

        if (phoneNumber.length != 11) {
            showMessage("warning", "Please enter a valid phone number")
        }

        if (password.length === 0 || !isNaN(password)) {
            showMessage("warning", "Please enter a valid price");
            return;
        }

        if (!accountType) {
            showMessage("warning", "Please select an account type.");
            return;
        }

        router.replace('/startPage');
    }

    return (
        <SafeAreaView style={styles.root}>
            {/* Top app bar */}
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Billingsgate Exchange</Text>
            </View>

            <View style={styles.content}>
                {/* Sign Up Title */}
                <View style={styles.sectionHeader}>
                    <>
                        <TouchableOpacity
                            onPress={() => handleBack()}
                            style={styles.backButton}
                        >
                            <Text style={styles.backArrow}>‹</Text>
                        </TouchableOpacity>
                        <Text style={styles.sectionTitle}>
                            Add New Listing
                        </Text>
                    </>
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.loginStyle}
                >
                    <View style={styles.newListingContainer}>
                        {/* First Name Input */}
                        <Text style={styles.quantityLabel}>Listing Name: </Text>
                        <TextInput
                            style={styles.input}
                            value={listingName}
                            onChangeText={setListingName}
                        />

                        {/* Quantity Picker */}
                        <View style={styles.quantityContainer}>
                            <Text style={styles.quantityLabel}>Quantity: </Text>
                            <View style={styles.quantityPicker}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={decrementQuantity}
                                >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityValue}>{amendQuantity}</Text>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={incrementQuantity}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Description Input */}
                        <Text style={styles.quantityLabel}>Description: </Text>
                        <TextInput
                            style={styles.descriptionInput}
                            value={description}
                            onChangeText={setDescription}
                            multiline={true}
                            textAlignVertical='top'
                        />

                        <View style={styles.photoPriceContent}>
                            <View style={styles.photoColumn}>
                                <Text style={styles.photoText}>Take Photo</Text>
                                <Image style={styles.photoImage} source={require('../../assets/camera-icon.png')} />
                            </View>

                            <View style={styles.priceColumn}>
                                <Text style={styles.priceLabel}>Price: </Text>
                                <TextInput
                                    style={styles.priceInput}
                                    value={price}
                                    onChangeText={(text) => setPrice(text.replace(/[^0-9.]/g, ""))}
                                    placeholder="£"
                                />
                            </View>
                        </View>

                        {/* Submit Button */}
                        <TouchableOpacity style={styles.updateButton}
                            onPress={() => createListing()}>
                            <Text style={styles.updateButtonText}>Create Listing</Text>
                        </TouchableOpacity>

                    </View>
                </KeyboardAvoidingView>
            </View>

            <ValidationMessage
                visible={validationMessage}
                type={validationType}
                message={validationText}
                onHide={() => setValidationMessage(false)}
            />

        </SafeAreaView>
    );
}
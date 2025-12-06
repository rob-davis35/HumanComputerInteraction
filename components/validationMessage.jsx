import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";
import { styles } from "../styles/styles";

export default function ValidationMessage({
    message,
    visible,
    type = "error",
    duration = 3000,
    onHide,
}) {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const backgroundColor = {
        error: "#ff0015ff",
        warning: "#ff9100ff",
        success: "#00ff3cff",
    }[type];

    useEffect(() => {
        if (visible) {
            // Fade in
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }).start(() => {
                // Stay visible, then fade out
                setTimeout(() => {
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 400,
                        useNativeDriver: true,
                    }).start(() => {
                        onHide && onHide(); // notify parent
                    });
                }, duration);
            });
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <Animated.View
            style={[
                styles.validationMessage,
                {
                    opacity: fadeAnim,
                    backgroundColor: backgroundColor,
                },
            ]}
        >
            <Text style={styles.validationMessageText}>{message}</Text>
        </Animated.View>
    );
}

import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

const Radio = ({ options, checkedValue, onChange, style }) => {
    return (<View style={[styles.radioContainer, style]}>
        {options.map((option) => {
            let active = checkedValue === option.value;

            return (<TouchableOpacity style={active ? [] : [styles.radio, styles.activeRadio]} onPress={() => {
                onChange(option.value);
            }}
                key={option.value}
            >
                <MaterialIcons name={active ? "radio-button-checked" : "radio-button-unchecked"}
                    size={24}
                    color="#374151"
                />
                <Text style={styles.radioText}>{option.label}</Text>
            </TouchableOpacity>);
        })}
    </View>);
};



export default Radio;
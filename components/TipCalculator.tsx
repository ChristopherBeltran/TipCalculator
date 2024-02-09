import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { baseTextStyle, styles } from './TipCalculator.styles';

const TipCalculator: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(15);

  const calculateTip = (): string => {
    if (!totalAmount) {
      return '0';
    }

    const amount = parseFloat(totalAmount);

    if (isNaN(amount)) {
      return '0';
    }

    return ((amount * tipPercentage) / 100).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[baseTextStyle, styles.inputLabel]}>Total Amount:</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          keyboardType="numeric"
          value={totalAmount}
          onChangeText={setTotalAmount}
        />
      </View>
      <Text style={[baseTextStyle, styles.percentageText]}>
        Tip Percentage: {tipPercentage}%
      </Text>
      <View style={styles.sliderShadow}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={30}
          step={1}
          value={tipPercentage}
          onValueChange={value => setTipPercentage(value)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        />
      </View>
      <View style={styles.tipAmountContainer}>
        <Text style={baseTextStyle}>Tip Amount:</Text>
        <Text style={[baseTextStyle, styles.tipAmountText]}>
          ${calculateTip()}
        </Text>
      </View>
    </View>
  );
};

export default TipCalculator;

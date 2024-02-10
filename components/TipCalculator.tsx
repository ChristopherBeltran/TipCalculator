import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { baseTextStyle, styles } from './TipCalculator.styles';

const TipCalculator: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [finalTotal, setFinalTotal] = useState<string>('0');

  const calculateTip = useCallback((): string => {
    const amount = parseFloat(totalAmount);
    if (isNaN(amount)) {
      return '0.00';
    }
    const tip = (amount * tipPercentage) / 100;

    return tip.toFixed(2);
  }, [totalAmount, tipPercentage]);

  const calculateFinalTotal = useCallback((): void => {
    const tipAmount = parseFloat(calculateTip());
    const amount = parseFloat(totalAmount);
    const finalAmount = isNaN(amount) ? 0 : amount + tipAmount;

    setFinalTotal(finalAmount.toFixed(2));
  }, [calculateTip, totalAmount]);

  useEffect(() => {
    calculateFinalTotal();
  }, [calculateFinalTotal]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[baseTextStyle, styles.inputLabel]}>Bill Amount:</Text>
        <TextInput
          style={[baseTextStyle, styles.input]}
          placeholder="0.00"
          keyboardType="numeric"
          value={totalAmount}
          onChangeText={setTotalAmount}
        />
      </View>
      <Text style={[baseTextStyle, styles.percentageLabel]}>
        Tip Percentage %
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
      <Text style={[baseTextStyle, styles.percentageValue]}>
        {tipPercentage}%
      </Text>
      <View style={styles.tipAmountContainer}>
        <Text style={baseTextStyle}>Tip Amount:</Text>
        <Text style={[baseTextStyle, styles.tipAmountText]}>
          ${calculateTip()}
        </Text>
      </View>
      <View style={[styles.tipAmountContainer, styles.totalAmountContainer]}>
        <Text style={baseTextStyle}>Total Amount:</Text>
        <Text style={[baseTextStyle, styles.tipAmountText]}>${finalTotal}</Text>
      </View>
    </View>
  );
};

export default TipCalculator;

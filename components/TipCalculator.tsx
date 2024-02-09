import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './TipCalculator.styles';

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
      <TextInput
        style={styles.input}
        placeholder="Total Amount"
        keyboardType="numeric"
        value={totalAmount}
        onChangeText={setTotalAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Tip Percentage"
        keyboardType="numeric"
        value={tipPercentage.toString()}
        onChangeText={text => setTipPercentage(parseFloat(text) || 0)}
      />
      <Text style={styles.text}>Tip Amount: ${calculateTip()}</Text>
    </View>
  );
};

export default TipCalculator;

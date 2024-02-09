import { StyleSheet } from 'react-native';

export const baseTextStyle = {
  fontSize: 18,
  fontWeight: 'bold' as 'bold',
};

export const styles = StyleSheet.create({
  baseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 40,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  inputLabel: {
    marginRight: 10,
    flexShrink: 1,
  },
  input: {
    width: '20%',
    textAlign: 'right',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    elevation: 5,
  },
  tipAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    backgroundColor: '#1fb28a',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
    padding: 10,
  },
  tipAmountText: {
    color: '#000',
    textAlign: 'right',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  percentageText: {
    marginTop: 60,
    marginBottom: 10,
  },
});

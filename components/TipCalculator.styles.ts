import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  tipAmountContainer: {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
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
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
});

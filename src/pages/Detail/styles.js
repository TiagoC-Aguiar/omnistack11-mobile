import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    marginTop: 36,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold',
    marginTop: 18,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  }, 

  heroTitle: {
    fontSize: 18,
    color: '#13131A',
    fontWeight: 'bold',
    lineHeight: 28,
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 15,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 46,
    width: '46%',
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  actionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

})


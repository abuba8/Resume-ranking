import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen')

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 20,
  },
  v: {
    height: 60,
  },
  vsub1: {
    flexDirection:'row',
    marginLeft: 20
  },
  vsub1Card: {
    backgroundColor: 'white',
    height: 40,
    minWidth: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  addBtn: {
    color: '#4d94ff',
    fontSize: 100
  },
  addBtnView: {
    marginTop: (height/1.1)-150,
    position: 'absolute',
    alignSelf: 'flex-end',
    height: 100,
    width: 100,
  },
  card: {
    // alignItems: 'center',
    width: width/1.1,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  v1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txt1:{
    marginTop: 8,
    fontSize: 24,
    marginLeft: 20,
  },
  txt2:{
    marginTop: 10,
    marginRight: 20,
    fontSize: 26,
    fontWeight: 'bold'
  },
  v2: {
    backgroundColor: '#f2f2f2',
    height: height-(height/1.3),
    flexDirection: 'row'
  }

})
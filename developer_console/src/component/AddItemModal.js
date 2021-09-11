import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useStore} from '../store/AppStore';

const ConditionButton = ({isActivate, text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[btnStyle.btn, isActivate ? btnStyle.btn_on : btnStyle.btn_off]}>
      <Text
        style={[
          btnStyle.btn__text,
          isActivate ? btnStyle.btn__text_on : btnStyle.btn__text_off,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const btnStyle = StyleSheet.create({
  btn: {
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 5,
  },
  btn__text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // on
  btn_on: {
    backgroundColor: '#58CCED',
  },
  btn__text_on: {color: 'white'},

  // off
  btn_off: {backgroundColor: 'rgb(200,200,200)'},
  btn__text_off: {color: 'gray'},
});

const FormStage1 = ({site, setSite, onSubmit}) => {
  let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  const submitBtnFlag = regex.test(site);
  return (
    <>
      <Text style={style.hint}>{'Type url like : https://...'}</Text>
      <TextInput
        value={site}
        onChangeText={(text) => setSite(text)}
        style={style.input_form}
        placeholder={'type site url here'}
      />

      <View style={style.btn_wrapper}>
        <ConditionButton
          isActivate={submitBtnFlag}
          text={'Submit'}
          onPress={onSubmit}
        />
      </View>
    </>
  );
};
const FormStage2 = ({state, setName, onSubmit}) => {
  const [isLoadImage, setIsLoadImage] = useState('LOAD');
  return (
    <>
      <View style={style.stage2_wrapper}>
        {isLoadImage === 'LOAD' && (
          <ActivityIndicator
            style={style.image_indicator}
            size="small"
            color="#0000ff"
          />
        )}
        <Image
          onLoad={() => setIsLoadImage('SUCCESS')}
          onError={() => setIsLoadImage('FAIL')}
          style={isLoadImage !== 'LOAD' ? style.favicon_img : ''}
          source={{uri: state.img}}
        />
        <View style={style.stage2_input_wrapper}>
          <TextInput
            value={state.site}
            editable={false}
            style={style.input_form}
            placeholder={'type site url here'}
          />
          <TextInput
            value={state.name}
            onChangeText={(text) => setName(text)}
            style={style.input_form}
            placeholder={'type site name here'}
          />
        </View>
      </View>

      <View style={style.btn_wrapper}>
        <ConditionButton
          isActivate={state.name !== ''}
          text={'Add'}
          onPress={onSubmit}
        />
      </View>
    </>
  );
};

const AddItemModal = (props) => {
  const {actionAddItem} = useStore();

  const initState = {
    stage: 1,
    site: '',
    name: '',
    img: '',
  };
  const [state, setState] = useState(initState);

  const setSite = (site) => {
    setState({
      ...state,
      site: site,
    });
  };

  const setName = (name) => {
    setState({
      ...state,
      name: name,
    });
  };

  const onSubmit = () => {
    if (state.stage === 1) {
      setState({
        ...state,
        stage: 2,
        img: `https://icons.duckduckgo.com/ip2/${
          state.site.split('//')[1]
        }.ico`,
      });
    } else {
      actionAddItem(
        state,
        // onSuccess
        () => {
          Alert.alert('✅ Success', 'Successfully Added!');
          setState(initState);
          props.setIsModalVisible(false);
        },
        // onFail
        () => {
          Alert.alert('❌ Fail', 'Site name is duplicated');
          setState(initState);
          props.setIsModalVisible(false);
        },
      );
    }
  };

  return (
    <Modal isVisible={props.isModalVisible}>
      <View style={style.container}>
        <View style={style.head}>
          <Text style={style.head__typo}>ADD NEW ITEM</Text>
          <TouchableOpacity
            style={style.head__icon_wrapper}
            onPress={() => {
              props.setIsModalVisible(false);
            }}>
            <Icon style={style.head__icon} name="close" />
          </TouchableOpacity>
        </View>
        <View style={style.body}>
          {state.stage === 1 && (
            <FormStage1
              site={state.site}
              setSite={setSite}
              onSubmit={onSubmit}
            />
          )}
          {state.stage === 2 && (
            <FormStage2 state={state} setName={setName} onSubmit={onSubmit} />
          )}
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  head: {
    borderBottomColor: 'rgb(240,240,240)',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  head__typo: {
    fontWeight: 'bold',
    fontSize: 15,
    flexGrow: 1,
  },
  head__icon_wrapper: {
    padding: 10,
    minWidth: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  head__icon: {
    fontSize: 15,
  },

  body: {
    marginTop: 10,
  },
  input_form: {
    // backgroundColor: 'rgb(240,240,240)',
    borderColor: 'rgb(230,230,230)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  stage2_wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  stage2_input_wrapper: {
    flexGrow: 1,
  },
  favicon_img: {
    marginRight: 10,
    width: 110,
    height: 110,
    borderRadius: 5,
  },

  hint: {
    color: 'gray',
    fontSize: 11,
    marginBottom: 5,
  },
  image_indicator: {
    width: 110,
    height: 110,
    marginRight: 10,
  },
});

export default AddItemModal;

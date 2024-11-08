import React, { useState } from 'react';
import {View, Text, Image, ScrollView, Button, Alert, TextInput, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    box: {
    padding: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4F7942',
        textAlign: 'center',
        borderWidth: 1,
        marginTop: 10,
        borderColor: "#4F7942",
        backgroundColor: '#AFE1AF',
    }
})

const InputArea = ({ poster, onChangeValue, options }) => {
  return (
      <View style={{backgroundColor: "#4F7942"}}>
        <Image source={poster} style={{ width: 391.5, height: 300 }} />
        <Text style={styles.text}>What animal is this?</Text>
        <RNPickerSelect
            onValueChange={onChangeValue}
            items={options}
        />
      </View>
  );
};



const MyApp = () => {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [name, setName] = useState('');

  const correctAnswers = {
    question1: 'Elephant',
    question2: 'Leopard',
    question3: 'HummingBird',
  };

  const handleSubmit = () => {
    let score = 0;
    if (answer1 === correctAnswers.question1) score += 1;
    if (answer2 === correctAnswers.question2) score += 1;
    if (answer3 === correctAnswers.question3) score += 1;

    Alert.alert(name + ` got ${score} out of 3 correct!`);
  };

  return (
      <ScrollView style={{backgroundColor: '#AFE1AF'}} contentContainerStyle={{paddingBottom: 20}}>
        <Text></Text>
        <Text></Text>
        <View style={{justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: "#3f9b0b", textAlign: "center", fontSize: 30, paddingRight: 10 }}>Animal Quiz</Text>
            <Icon name="paw" size={30} color="#3f9b0b" />
          </View>
        </View>
          <TextInput style={{borderWidth: 1, margin: 20}} placeholder = " Enter your name" onChangeText={(text) => setName(text)}/>
        <View style={styles.box}>
          <InputArea
            poster={require('./img/elephant.jpg')}
            onChangeValue={setAnswer1}
            options={[
              { label: 'Rhino', value: 'Rhino' },
              { label: 'Elephant', value: 'Elephant' },
              { label: 'Zebra', value: 'Zebra' },
            ]}
            />
        </View>
        <View style={styles.box}>
            <InputArea
                poster={require('./img/leopard.jpg')}
                onChangeValue={setAnswer2}
                options={[
                  { label: 'Leopard', value: 'Leopard' },
                  { label: 'Rabbit', value: 'Rabbit' },
                  { label: 'Elephant', value: 'Elephant' },
                ]}
            />
        </View>
        <View style={styles.box}>
            <InputArea
                poster={require('./img/hummingbird.jpg')}
                onChangeValue={setAnswer3}
                options={[
                  { label: 'Zebra', value: 'Zebra' },
                  { label: 'HummingBird', value: 'HummingBird' },
                  { label: 'Rabbit', value: 'Rabbit' },
                ]}
            />
        </View>
        <Button title="Submit Answers" onPress={handleSubmit}/>
      </ScrollView>
  );
};

export default MyApp;

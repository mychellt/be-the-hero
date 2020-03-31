import React, { useState } from 'react';
import { useNavigation, useRoute} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import * as MainComposer  from 'expo-mail-composer';

import styles from './styles';

import logo from '../../assets/logo.png';
  

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation(); 

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajuda no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function mail() {
    MainComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: ['mychellt@gmail.com'],
      body: message,
    });
  }

  function whatsapp() {
      Linking.openURL(`whatsapp://send?phone=5584994509160&text=${message}`);
  }
  return (
    <View style={styles.container}>

       <View style={styles.header}>
        <Image source={logo}/> 
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={16} color='#e82041'></Feather>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>{incident.title}</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={whatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={mail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  // States
  const [participants, setParticipants] = useState<Array<string>>([])
  const [participantName, setParticipantName] = useState<string | undefined>(
    undefined,
  )
  // Variables

  function handleParticipantAdd() {
    if (participantName) {
      if (participants.includes(participantName)) {
        return Alert.alert(
          'Participant Already Exists',
          'The participant you are attempting to add has already been added.',
        )
      }

      setParticipants([...participants, participantName])
      setParticipantName(undefined)
    }
  }

  function handleParticipantRemove(name: string) {
    return Alert.alert(
      'Remove Participant',
      `Are you certain you wish to remove the participant ${name}?`,
      [
        {
          text: 'Yes',
          onPress: () =>
            Alert.alert(
              'Deleted',
              'The participant has been successfully removed.',
            ),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ],
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>{new Date().toDateString()}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor="#6B6B6B"
          onChangeText={(text) => setParticipantName(text)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={(name: string) => handleParticipantRemove(name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nobody in your event yet? Add participants to your list.
          </Text>
        )}
      />
      {/* <ScrollView>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={(name: string) => handleParticipantRemove(name)}
          />
        ))}
      </ScrollView> */}
    </View>
  )
}

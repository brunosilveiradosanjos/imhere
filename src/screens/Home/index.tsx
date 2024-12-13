import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import { Participant } from '../../components/Participant'

function handleParticipantAdd() {
  console.log('handleParticipantAdd')
}
function handleParticipantRemove(name: string) {
  console.log(`handleParticipantRemove ${name}`)
}

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Bruno Silveira dos Anjos"
        onRemove={(name: string) => handleParticipantRemove(name)}
      />
      <Participant
        name="Sarah Ribeiro dos Anjos"
        onRemove={(name: string) => handleParticipantRemove(name)}
      />
      <Participant
        name="Lara Ribeiro dos Anjos"
        onRemove={(name: string) => handleParticipantRemove(name)}
      />
      <Participant
        name="Samuel Ribeiro dos Anjos"
        onRemove={(name: string) => handleParticipantRemove(name)}
      />
    </View>
  )
}

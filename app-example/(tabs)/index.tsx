import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Projeto UPX 6 📚</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Descrição 📓</ThemedText>
        <ThemedText>
          Este projeto visa criar um aplicativo para auxiliar no acompanhamento
          médico prolongado de pacientes com tratamentos mais longos fora do
          consultório.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Tarefas ✅</ThemedText>
        <ThemedText>
          Serão feitos durante o desenvolvimento do aplicativo:
        </ThemedText>
        <ThemedText>
          {"\u2022 "}Um cadastrador de tarefas com lembretes; {"\n\u2022"} Uma
          maneira de cadastrar horários de remédios;
          {"\n\u2022"} Um visualizador de esrtatísticas a partir dos medidores
          já existentes.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Iniciar o projeto do jeito certo ⭕
        </ThemedText>
        <ThemedText>
          Quando formos realmente começar o desenvolvimento, devemos rodar{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          para criar uma nova pasta{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> . A de agora vai
          para <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

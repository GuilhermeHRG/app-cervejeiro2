import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

function EquipmentDetails({ route, navigation }) {
  const { equipmentId } = route.params;
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    // Simulação de busca de detalhes do equipamento
    const fetchEquipmentDetails = async () => {
      // Aqui você faria uma requisição à API ou buscaria no banco de dados
      // Simulando com dados estáticos para o exemplo
      const fetchedEquipment = {
        id: equipmentId,
        name: 'Equipamento de Maturação',
        description: 'Equipamento de fermentação e maturação para produção de cervejas artesanais.',
        details: `
          Modelo: XYZ-1000
          Fabricante: BrewTech
          Capacidade: 200 Litros
          Material: Aço Inoxidável
          Tipo: Fermentador
          Temperatura de Operação: 15-25°C
          Conexões: Entrada e saída de líquido, válvula de alívio de pressão
        `,
        maintenance: `
          - Verificar o nível de pressão semanalmente.
          - Limpar o interior após cada uso.
          - Inspecionar conexões e válvulas mensalmente.
        `,
        usageInstructions: `
          1. Verifique se todas as conexões estão seguras.
          2. Ajuste a temperatura de acordo com o tipo de fermentação.
          3. Adicione os ingredientes e feche a tampa.
          4. Monitore o processo de fermentação e ajuste conforme necessário.
        `,
        warranty: '2 anos de garantia contra defeitos de fabricação.',
        notes: 'Evite exposição direta ao sol para prolongar a vida útil do equipamento.'
      };
      setEquipment(fetchedEquipment);
    };

    fetchEquipmentDetails();
  }, [equipmentId]);

  if (!equipment) {
    return <Text>Carregando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{equipment.name}</Text>

      <Text style={styles.sectionTitle}>Descrição</Text>
      <Text style={styles.sectionContent}>{equipment.description}</Text>

      <Text style={styles.sectionTitle}>Detalhes Técnicos</Text>
      <Text style={styles.sectionContent}>{equipment.details}</Text>

      <Text style={styles.sectionTitle}>Manutenção</Text>
      <Text style={styles.sectionContent}>{equipment.maintenance}</Text>

      <Text style={styles.sectionTitle}>Instruções de Uso</Text>
      <Text style={styles.sectionContent}>{equipment.usageInstructions}</Text>

      <Text style={styles.sectionTitle}>Garantia</Text>
      <Text style={styles.sectionContent}>{equipment.warranty}</Text>

      <Text style={styles.sectionTitle}>Notas</Text>
      <Text style={styles.sectionContent}>{equipment.notes}</Text>

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default EquipmentDetails;

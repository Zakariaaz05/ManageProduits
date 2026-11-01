import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];


const produitsDisponibles = produits.filter(p => p.stock > 0);
const nombreDisponibles = produitsDisponibles.length;
const valeurStock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);

export default function App() {
  return (
    <View style={styles.ecran}>
      {/* عنوان التطبيق */}
      <Text style={styles.titre}>Catalogue de la Boutique</Text>
      
      {/* ملخص المخزون */}
      <View style={styles.carteResume}>
        <Text style={styles.texteResume}>Disponibles : {nombreDisponibles} produits</Text>
        <Text style={styles.texteResume}>Valeur du stock : {valeurStock} MAD</Text>
      </View>

      {/* عرض قائمة المنتجات */}
      <Text style={styles.sousTitre}>Liste des articles :</Text>
      {produits.map((p) => (
        <Text key={p.id} style={styles.ligne}>
          {p.nom} - {p.prix} MAD (Stock: {p.stock})
        </Text>
      ))}
    </View>
  );
}

// التنسيقات (الستايل)
const styles = StyleSheet.create({
  ecran: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 26, 
    backgroundColor: '#F2F7FD' 
  },
  titre: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#00235C', 
    marginBottom: 20,
    textAlign: 'center'
  },
  carteResume: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  texteResume: { 
    fontSize: 17, 
    fontWeight: 'bold', 
    color: '#003796', 
    marginBottom: 5 
  },
  sousTitre: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  ligne: { 
    fontSize: 16, 
    paddingVertical: 10, 
    color: '#00235C',
    borderBottomWidth: 1,
    borderBottomColor: '#D9E4F5'
  }
});
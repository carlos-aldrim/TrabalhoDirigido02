import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./BookSearchPage.styles";
import { BookSearchContext } from "../../../contexts";
import StarRating from "react-native-star-rating";

export const BookSearchPage = () => {
  const {
    query,
    results,
    setQuery,
    searchBooks,
    loading,
    addRating,
    searchRating,
  } = React.useContext(BookSearchContext);

  if (!loading) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Pesquisar:</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite o livro..."
            onChangeText={(text) => setQuery(text)}
            value={query}
          />
          <TouchableOpacity style={styles.buttonContent} onPress={searchBooks}>
            <Text style={styles.button}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContent}>
          {results.length !== 0 ? (
            results.map((result) => (
              <View style={styles.bookContent} key={result.objectID}>
                <View style={styles.bookLine}>
                  <Icon name="user" size={15} color="#fff" />
                  <Text style={styles.textBookData}>{result.author}</Text>
                </View>
                <View style={styles.bookLine}>
                  <Icon name="book" size={15} color="#fff" />
                  <Text style={styles.textBookData}>{result.title}</Text>
                </View>
                <View style={styles.bookLine}>
                  <Icon name="link" size={15} color="#fff" />
                  <Text style={styles.textBookData}>{result.url}</Text>
                </View>
                <View style={styles.stars}>
                    <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={searchRating(result.objectID)}
                    selectedStar={(rate) => addRating(result.objectID, rate)}
                    starSize={20}
                    fullStarColor={"#ffc400"}
                    starStyle={{ margin: 2, padding: 0 }}
                    />
                </View>
              </View>
            ))
          ) : (
            <Text>Nenhum livro encontrado.</Text>
          )}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#636dcc" />
      </View>
    );
  }
};

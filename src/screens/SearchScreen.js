import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();

  const filterResultsByPriceRange = price => {
    return results.filter(result => {
      return result.price_range === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <ScrollView>
        {filterResultsByPriceRange(1).length != 0 ? (
          <ResultsList
            results={filterResultsByPriceRange(1)}
            title="Cost Effective"
          />
        ) : (
          <></>
        )}
        {filterResultsByPriceRange(2).length != 0 ? (
          <ResultsList
            results={filterResultsByPriceRange(2)}
            title="Medium Range"
          />
        ) : (
          <></>
        )}
        {filterResultsByPriceRange(3).length != 0 ? (
          <ResultsList
            results={filterResultsByPriceRange(3)}
            title="High Class"
          />
        ) : (
          <></>
        )}
        {filterResultsByPriceRange(4).length != 0 ? (
          <ResultsList
            navigation={navigation}
            results={filterResultsByPriceRange(4)}
            title="Extravagant"
          />
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

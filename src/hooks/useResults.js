import { useEffect, useState } from "react";

import zomato from "../api/zomato";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrorMsg] = useState(null);

  const searchApi = async searchTerm => {
    try {
      const response = await zomato.get("/search", {
        params: {
          entity_type: "city",
          q: searchTerm,
          count: 10
        }
      });
      temp_response = response.data.restaurants;
      var results_final = [];
      for (var i = 0; i < temp_response.length; i++) {
        var temp_restaurant = temp_response[i].restaurant;
        var result = {
          id: temp_restaurant.id,
          name: temp_restaurant.name,
          average_cost_for_two: temp_restaurant.average_cost_for_two,
          price_range: temp_restaurant.price_range,
          thumb: temp_restaurant.thumb,
          user_rating: temp_restaurant.user_rating,
          all_reviews_count: temp_restaurant.all_reviews_count
        };
        results_final.push(result);
      }
      setResults(results_final);
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg("Something went wrong! Please try again");
      setResults([]);
    }
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errMsg];
};

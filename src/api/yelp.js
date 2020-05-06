import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _rzZbnehBNcLLK1dNY_0gsvot4-9R6XltHrJlCqeWAMvEQ2NK53oktZFATisO3shUj6OxRAZQdfSLMrvo-eoVcx7HBWq2DA4qpmZR3oSTRY6Aw7I86Ttg3kmyWiyXnYx",
  },
});

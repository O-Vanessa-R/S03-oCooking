import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../../../@types/recipe";
import { RootState } from "../../store";
import { delayedFetchRecipes } from "../../../api/recipe";

// Define an interface for the slice state
export interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
}

// Define the initial state using that type
const initialState: RecipesState = {
  recipes: [
    {
      id: 1,
      name: "Poulet rôti aux herbes",
      imgSrc: "https://picsum.photos/750/200",
      description: "Un délicieux poulet rôti aux herbes aromatiques.",
      ingredients: ["1 poulet", "Herbes de Provence", "Sel", "Poivre"],
    },
    {
      id: 2,
      name: "Lasagnes bolognaises",
      imgSrc: "https://picsum.photos/200/300",
      description: "Des lasagnes savoureuses avec une sauce bolognaise maison.",
      ingredients: [
        "Feuilles de lasagne",
        "Sauce bolognaise",
        "Fromage râpé",
        "Béchamel",
      ],
    },
  ],
  loading: false,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    count: (state) => {
      console.log("Count recipes : ", state.recipes.length);
    },
    // action.payload pour récupérer ce qu'on envoi à la fonction getCurrentRecipe
    getCurrentRecipe: (state, action) => {
      console.log("Current Recipe :", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadRecipesData.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.loading = false;
      })
      .addCase(loadRecipesData.rejected, (state) => {
        console.log("Error get recipes");
        state.loading = false;
      });
  },
});

export const { count, getCurrentRecipe } = recipesSlice.actions;

export const loadRecipesData = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    return await delayedFetchRecipes();
  },
);

export const getAllRecipes = (state: RootState) => {
  return state.recipes.recipes;
};

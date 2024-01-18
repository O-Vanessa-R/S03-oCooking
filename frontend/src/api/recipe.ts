import { User } from "../@types/user.ts";
import wrapPromise from "./wrapPromise.ts";

export const fetchRecipes = async () => {
  const response = await fetch("/api/recipes");

  return await response.json();
};

export const delayedFetchRecipes = () => {
  const delayedPromise = new Promise((resolve) =>
    setTimeout(resolve, 5000),
  ).then(async () => {
    return await fetchRecipes();
  });

  return wrapPromise(delayedPromise);
};

export const fetchRecipe = async (recipeId: string | undefined) => {
  const response = await fetch(`/api/recipes/${recipeId}`);
  return await response.json();
};
export const fetchRecipesForConnectedUser = async (user: User | null) => {
  const response = await fetch(`/api/recipes?userId=${user?.id}`);
  return await response.json();
};

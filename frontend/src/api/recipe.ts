import { User } from "../@types/user.ts";

export const fetchRecipes = async () => {
  const response = await fetch("/api/recipes");

  return await response.json();
};

export const fetchRecipe = async (recipeId: string | undefined) => {
  const response = await fetch(`/api/recipes/${recipeId}`);

  return await response.json();
};

export const fetchRecipesForConnectedUser = async (user: User | null) => {
  const response = await fetch(`/api/recipes?userId=${user?.id}`);

  return await response.json();
};

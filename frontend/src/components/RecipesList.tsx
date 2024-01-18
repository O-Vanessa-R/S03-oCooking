import RecipeCard from "./RecipeCard.tsx";
<<<<<<< Updated upstream
import "../assets/styles/recipesList.scss";
import { RecipeListProps } from "../@types/recipe.ts";
=======
import { delayedFetchRecipes } from "../api/recipe.ts";
import { Recipe } from "../@types/recipe.ts";

const ressource = delayedFetchRecipes();

const RecipesList = () => {
  const recipes = ressource.read();
>>>>>>> Stashed changes

  return (
    <div className="recipes__list">
      {recipes.map((recipe: Recipe) => {
        return <RecipeCard recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};
export default RecipesList;

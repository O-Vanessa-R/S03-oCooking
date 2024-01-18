import { Suspense, useEffect } from "react";
import RecipesList from "../components/RecipesList.tsx";
import { useAppDispatch, useAppSelector } from "../hooks/redux.ts";
import {
  count,
  getAllRecipes,
  loadRecipesData,
} from "../store/features/recipes/recipesSlice.ts";
import Loading from "../components/Loading.tsx";
import ErrorBoundary from "../components/ErrorBoundary.tsx";
import Error from "../components/Error.tsx";

const Home = () => {
  return (
    <>
      <ErrorBoundary
        fallback={
          <Error message={"Erreur lors de la récupération des recettes"} />
        }
      >
        <Suspense fallback={<Loading />}>
          <RecipesList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

/*const Home = () => {
  const recipes = useAppSelector(getAllRecipes);
  // const recipesState = useAppSelector(state => state.recipes);
  const recipesLoading = useAppSelector(state => state.recipes.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(count());
    dispatch(loadRecipesData());
  }, []);
  return (
    <>
      <RecipesList recipes={recipes} />
    </>
  );
};*/

export default Home;

import { RecipeCardProps } from "../@types/recipe.ts";
import "../assets/styles/recipeCard.scss";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();
=======
import { useAppDispatch } from "../hooks/redux.ts";
import { getCurrentRecipe } from "../store/features/recipes/recipesSlice.ts";
import { SyntheticEvent, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal.tsx";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
>>>>>>> Stashed changes

  const handleClick = (id: number): void => {
    navigate(`/recipe/${id}`);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = (e: SyntheticEvent) => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <>
      <div className={`recipe__card`} onClick={openModal}>
        <img src={recipe.imgSrc} alt="" />
        <div className="recipe__content">
          <h2>{recipe.name}</h2>
          <p className="recipe__description">{recipe.description}</p>
          <button
            className="recipe__button"
            onClick={() => handleClick(recipe.id)}
          >
            Je cuisine !
          </button>

          {showModal &&
            createPortal(
              <Modal recipe={recipe} onClose={closeModal} />,
              document.body,
            )}
        </div>
      </div>
    </>
  );
};
export default RecipeCard;

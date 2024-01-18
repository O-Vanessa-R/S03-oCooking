import { SyntheticEvent } from "react";
import { Recipe } from "../@types/recipe";

interface ModalProps {
  recipe: Recipe;
  onClose: (e: SyntheticEvent) => void;
}

const Modal = ({ recipe, onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2>{recipe.name}</h2>
        <button className="button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;

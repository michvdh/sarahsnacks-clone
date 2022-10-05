import { useRef } from "react";
import categoriesDB from "../../../model/categoriesDB";

interface CategorySearchProps {
  onCategorySearch: (category: string) => void;
  onClearCategory: boolean;
  categoryInput: string;
}

const CategorySearch: React.FC<CategorySearchProps> = (props) => {

  const setToDashedFormat = (category: string) => {
    return category.replace(/\s+/g,"-").toLowerCase();
  }

  let categoryInputRef: any[] = [];

  categoriesDB.forEach((_, index) => {
    categoryInputRef[index] = useRef<HTMLInputElement>(null);
  });

  const selectHandler = (cat: number) => {
    props.onCategorySearch(categoryInputRef[cat].current?.value);
  }

  if (props.onClearCategory) {
    console.log("clearing category");
    categoriesDB.forEach((_, index) => {
      categoryInputRef[index].current.checked = false;
    });
  }

  return (
    <div>
      <h3>Categories</h3>
      <form action="">
        <ul>
          {categoriesDB.map((category, index) => (
            <li key={index}>
              <input 
                type="radio" 
                className="radio-btn"
                id={setToDashedFormat(category)} 
                name="categories" 
                value={category}
                onClick={() => selectHandler(index)}  
                ref={categoryInputRef[index]}
                defaultChecked={props.categoryInput === category && true}
              />
              <label htmlFor={setToDashedFormat(category)}>{category}</label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );


};

export default CategorySearch;

import { useRef } from "react";
import categoriesDB from "../../model/categoriesDB";

const CategorySearch: React.FC<{
  onCategorySearch: (category: string) => void;
  onClearCategory: boolean;
  // onRadioCheck: boolean | null;
}> = (props) => {

  const setToDashedFormat = (category: string) => {
    return category.replace(/\s+/g,"-").toLowerCase();
  }

  let categoryRef: any[] = [];

  categoriesDB.forEach((category, index) => {
    categoryRef[index] = useRef<HTMLInputElement>(null);
  });

  const selectHandler = (cat: number) => {
    props.onCategorySearch(categoryRef[cat].current?.value)
  }

  if (props.onClearCategory === true) {
    categoriesDB.forEach((category, index) => {
      categoryRef[index].current.checked = false;
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
                ref={categoryRef[index]}
                // checked={props.onRadioCheck}
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

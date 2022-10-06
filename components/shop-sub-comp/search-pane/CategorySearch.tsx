import { useState, useRef } from "react";
import categoriesDB from "../../../model/categoriesDB";
import Link from "next/link";
import classes from './CategorySearch.module.scss';

interface CategorySearchProps {
  onCategorySearch: (category: string) => void;
  onClearCategory: boolean;
  categoryInput: string;
  // onCategoryChange: (a: string, b:string) => void;
  // categoryCheckState: boolean;
}

const CategorySearch: React.FC<CategorySearchProps> = (props) => {
  const setToDashedFormat = (category: string) => {
    return category.replace(/\s+/g, "-").toLowerCase();
  };

  let categoryInputRef: any[] = [];

  categoriesDB.forEach((_, index) => {
    categoryInputRef[index] = useRef<HTMLInputElement>(null);
  });


  const selectHandler = (category: string) => {
    props.onCategorySearch(category);
  };

  // categoryInputRef[cat].current?.value

  if (props.onClearCategory) {
    console.log("clearcategory");
    categoriesDB.forEach((_, index) => {
      categoryInputRef[index].current.checked = false;
    });
  }


  return (
    <div className={`${classes['category-search']}`}>
      <h3>Categories</h3>
      <form action="">
        <ul>
          {categoriesDB.map((category, index) => (
            <li key={index}>
              <input
                type="radio"
                className={`radio-btn ${classes.option}`}
                id={setToDashedFormat(category)}
                name="categories"
                value={category}
                // onClick={() => selectHandler(category)}
                ref={categoryInputRef[index]}
                defaultChecked={props.categoryInput === category && true}
                checked={props.categoryInput === category && true}
                // checked={props.categoryCheckState}
                // onChange={() => {props.onCategoryChange(props.categoryInput, category)}}
                onChange={() => selectHandler(category)}
              />
              <label htmlFor={setToDashedFormat(category)} className={classes.option}>{category}</label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default CategorySearch;

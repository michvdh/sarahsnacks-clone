import { useState, useRef, useEffect, useMemo } from "react";
import categoriesDB from "../../../model/categoriesDB";
import Link from "next/link";
import classes from "./CategorySearch.module.scss";
import React from "react";

interface CategorySearchProps {
  onCategorySearch: (category: string) => void;
  onClearCategory: boolean;
  categoryInput: string;
}

const CategorySearch: React.FC<CategorySearchProps> = (props) => {
  const setToDashedFormat = (category: string) => {
    return category.replace(/\s+/g, "-").toLowerCase();
  };

  let categoryInputRef = useMemo(() => {
    const refs = {};
    categoriesDB.forEach((_, index) => {
      refs[index] = React.createRef<HTMLInputElement>();
    });
    return refs;
  }, [categoriesDB]);

  const selectHandler = (category: string) => {
    props.onCategorySearch(category);
  };

  if (props.onClearCategory) {
    categoriesDB.forEach((_, index) => {
      // refs[index].current.checked = false;
      categoryInputRef[index].current.checked = false;
    });
  }


  return (
    <div className={`${classes["category-search"]}`}>
      <h3>Categories</h3>
      <form action="">
        <ul>
          {categoriesDB.map((category, index) => (
            <li key={index}>
              <label
                className={`${classes.circle} ${classes.option} ${
                  props.categoryInput === category && true ? classes.active : ""
                }`}
                htmlFor={setToDashedFormat(category)}
              ></label>
              <label
                htmlFor={setToDashedFormat(category)}
                className={`${classes.option} ${classes.label} ${
                  props.categoryInput === category && true ? "bold" : ""
                }`}
              >
                {category}
              </label>
              <input
                type="radio"
                className={`radio-btn ${classes.option} ${classes["radio-btn"]}`}
                id={setToDashedFormat(category)}
                name="categories"
                value={category}
                ref={categoryInputRef[index]}
                // ref={refs[index]}
                checked={props.categoryInput === category && true}
                onChange={() => selectHandler(category)}
              />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default CategorySearch;

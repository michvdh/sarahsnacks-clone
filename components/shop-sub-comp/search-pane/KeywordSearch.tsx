import { FormEvent, useRef, useState } from 'react';
import classes from './KeywordSearch.module.scss'

interface KeywordSearchProps {
  onKeywordSearch: (keyword: string) => void; 
  onClearKeyword: boolean;
  keywordInput: string;
}

const KeywordSearch: React.FC<KeywordSearchProps> = (props) => {
  const keywordInputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keyword = keywordInputRef.current?.value ? keywordInputRef.current?.value : '';
    props.onKeywordSearch(keyword);
  }

  if (keywordInputRef.current && props.onClearKeyword) {
    console.log("clearing keyword");
    keywordInputRef.current.value = ''; // here, I am interacting with the DOM directly. Not a good practice but kind of okay for these scenarios
  }

  return (
    <div className={`${classes['keyword-search']}`}>
      <form onSubmit={submitHandler}>
        <input type="text" ref={keywordInputRef} placeholder="Search products..." defaultValue={props.keywordInput && props.keywordInput} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default KeywordSearch;
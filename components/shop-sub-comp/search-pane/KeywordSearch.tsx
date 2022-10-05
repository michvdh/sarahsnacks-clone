import { FormEvent, useRef, useState } from 'react';
import classes from './KeywordSearch.module.scss'

const KeywordSearch: React.FC<{
  onKeywordSearch: (keyword: string) => void; 
  onClearKeyword: boolean;
}> = (props) => {
  const [searchField, setSearchField] = useState('');

  const keywordInputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keyword = keywordInputRef.current?.value ? keywordInputRef.current?.value : '';
    setSearchField(keyword);
    props.onKeywordSearch(keyword);
    
  }

  if (props.onClearKeyword) {
    console.log("clearing keyword");
    keywordInputRef.current.value = ''; // here, I am interacting with the DOM directly. Not a good practice but kind of okay for these scenarios
  }


  return (
    <div className={`${classes['keyword-search']}`}>
      <form onSubmit={submitHandler}>
        <input type="text" ref={keywordInputRef} placeholder="Search products..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default KeywordSearch;
import { useEffect, useState } from 'react';
import classes from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  onPageBtnClick: (clickedPage: number) => void;
  pageInput: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  let pages: number[] = [];
  let lastPage: number;

  // const [currentPage, setCurrentPage] = useState(1);

  const pageHandler = (clickedPage: number) => {
    props.onPageBtnClick(clickedPage)
  }

  for (let i=0; i < props.totalPages; i++) {
    // const pageBtnEl = <button key={i} onClick={() => pageHandler(i+1)} className={props.pageInput === (i+1) ? classes.selected : ''}>{i + 1}</button>;
    pages.push(i + 1);
  }

  const prevPageHandler = () => {
    if (props.pageInput > 1) {
      pageHandler(props.pageInput - 1);
    }
  }

  const nextPageHandler = () => {
    if (props.pageInput < pages.at(-1)!) {
      pageHandler(props.pageInput + 1);
    } 
  }



  lastPage = pages.length > 1 ? pages.at(-1)! : 1;

  console.log(props.pageInput);

  return (
    <div className={`${classes['page-btn-container']}`}>
      {(props.pageInput > 1) && <button onClick={prevPageHandler}>{'<'}</button>} 

      {pages.map((page, index) => (
        <button key={index} onClick={() => pageHandler(page)} className={props.pageInput === (page) ? classes.selected : ''}>
          {page}
        </button>
      ))}

      {(props.pageInput < pages.at(-1)!) && <button onClick={nextPageHandler}>{'>'}</button>}
    </div>
  );

}

export default Pagination;
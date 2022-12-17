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

  for (let i = 0; i < props.totalPages; i++) {
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

  return (
    <div className={`${classes['page-btn-container']}`}>
      {(props.pageInput > 1) &&
        <button className={`${classes['page-btn']}`} onClick={prevPageHandler}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </button>}

      {pages.map((page, index) => (
        <button key={index} onClick={() => pageHandler(page)} className={`${props.pageInput === (page) ? classes.selected : ''} ${classes['page-btn']}`}>
          {page}
        </button>
      ))}

      {(props.pageInput < pages.at(-1)!) &&
        <button className={`${classes['page-btn']}`} onClick={nextPageHandler}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </button>}
    </div>
  );

}

export default Pagination;
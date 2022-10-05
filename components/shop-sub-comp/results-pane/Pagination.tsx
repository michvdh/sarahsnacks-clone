import classes from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  onPageBtnClick: (clickedPage: number) => void;
  pageInput: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  let pageButtons = [];

  const pageClickHandler = (clickedPage: number) => {
    props.onPageBtnClick(clickedPage)
  }

  for (let i=0; i < props.totalPages; i++) {
    const pageBtnEl = <button onClick={() => pageClickHandler(i+1)} className={props.pageInput === (i+1) ? classes.selected : ''}>{i + 1}</button>;
    pageButtons.push(pageBtnEl);
  }

  return (
    <div className={`${classes['page-btn-container']}`}>
      {pageButtons.map((pageBtn) => (pageBtn))}
    </div>
  );
}

export default Pagination;
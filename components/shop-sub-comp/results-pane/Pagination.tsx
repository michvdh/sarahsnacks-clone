import classes from './Pagination.module.scss';

const Pagination: React.FC<{
  totalPages: number;
  onPageBtnClick: (clickedPage: number) => void;
}> = (props) => {
  let pageButtons = [];

  const pageClickHandler = (clickedPage: number) => {
    props.onPageBtnClick(clickedPage)
  }

  for (let i=0; i < props.totalPages; i++) {
    const pageBtnEl = <button onClick={() => pageClickHandler(i+1)} >{i + 1}</button>;
    pageButtons.push(pageBtnEl);
  }

  return (
    <div>
      {pageButtons.map((pageBtn) => (pageBtn))}
    </div>
  );
}

export default Pagination;
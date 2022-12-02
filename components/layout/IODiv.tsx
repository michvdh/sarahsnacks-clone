import classes from './IODiv.module.scss';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { ioActions } from '../../store/intersectionObserver';
import { useEffect } from 'react';

// this is a helper component whose purpose is for the header's intersection observer

const IODiv = () => {
  const dispatch = useDispatch();

  const { ref: ioDivRef, entry } = useInView({
    threshold: 0.9, // this means IO will trigger once x% of the target is inside the viewport
    root: null,
    rootMargin: '0px'
  });

  const intersectState = entry?.isIntersecting;

  useEffect(() => {
    if (intersectState !== undefined) {
      dispatch(ioActions.changeIOState(intersectState));
    }
  });
  

  return (
    <div className={`${classes['io-div']}`} ref={ioDivRef}></div>
  );
}

export default IODiv;
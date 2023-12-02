import styles from './loadingIndicator.module.css';
import React from 'react';

const LoadingIndicator = () => (
  <div className="z-50">
    <div className={styles['sk-chase']}>
      <div className={`bg-black ${styles['sk-chase-dot']}`}></div>
      <div className={`bg-black ${styles['sk-chase-dot']}`}></div>
      <div className={`bg-black ${styles['sk-chase-dot']}`}></div>
      <div className={`bg-black ${styles['sk-chase-dot']}`}></div>
      <div className={`bg-black ${styles['sk-chase-dot']}`}></div>
      <div className={`bg-black ${styles['sk-chase-dot']}`}></div>
    </div>
  </div>
);

export default LoadingIndicator;

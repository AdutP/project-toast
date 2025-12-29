import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf/ToastShelf';

import { ToastContext } from '../ToastProvider/ToastProvider';



function ToastPlayground() {
 const {
    VARIANT_OPTIONS,
    message,
    setMessage,
    variant,
    setVariant,
    handleCreateToast,
  } = React.useContext(ToastContext);

  

  return (
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf />

        <form 
          className={styles.controlsWrapper}
          onSubmit={(event) => {
            event.preventDefault();
            handleCreateToast(variant, message);
          }}
        >
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={message} onChange={(event) => {return setMessage(event.target.value)}} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >

              {VARIANT_OPTIONS.map((option) => (
                <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={event => setVariant(event.target.value)}
                />
                {option}
              </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default ToastPlayground;

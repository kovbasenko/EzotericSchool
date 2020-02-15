import React from 'react';

import runes from './img/runes.jpg';

import styles from './runes.module.scss';

function Runes() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.runes} id={2}>
      <div className={`${styles.runesContainer} container`}>
        <div className={styles.imageContainer}>
          <img src={runes} alt="runes" className={styles.image} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Магия Рун</h2>
          <p className={styles.desc}>
            Руны – это древняя скандинавская и славянская письменность. Каждая буква в скандинавском
            руническом алфавите имела своё название и своё значение. Сами скандинавы считали, что
            руны обладают мощной энергетикой и большой силой, поэтому использовали их для гадания и
            защиты.
          </p>
          <p className={styles.desc}>
            Для гадания руны вырезают на деревянных пластинах, на камнях или кости и собирают в
            мешочек, который всегда носят с собой. А в качестве оберегов руны располагают в
            определенном месте дома, делают рунические татуировки или украшения.
          </p>
          <p className={styles.desc}>
            Каждая руна имеет своё название и своё значение. И в зависимости от этого им находят
            применения практически во всех сферах жизни.
          </p>
          <button className={styles.button} onClick={() => scrollTo()}>
            Пройти обучение
          </button>
        </div>
      </div>
    </div>
  );
}

export default Runes;

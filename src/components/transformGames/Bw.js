import React from 'react';

import black from './img/black.jpg';

import styles from './bw.module.scss';

function Bw() {
  return (
    <div className={styles.bw}>
      <div className={`${styles.bwContainer} container`}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>«Чёрное и белое»</h2>
          <p className={styles.desc}>
            Игра «Чёрное и белое» помогает определиться с целью. Покажет, какие препятствия могут
            стоять на пути! Выберите любую из сфер вашей жизни: карьера, духовное развитие,
            взаимоотношения, финансы, семья, здоровье, хобби и сформулируйте ваш запрос. Эта игра
            как зеркало покажет каким образом вы ставите и достигаете свои цели. Мы не способны
            одновременно делать что-то и наблюдать за этим. Только игровые технологии дают эту
            возможность.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={black} alt="bw" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Bw;

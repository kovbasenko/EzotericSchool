import React from 'react';

import taro from './img/taro.jpg';

import styles from './taro.module.scss';

function TaroQuest() {
  return (
    <div className={styles.taroQuest}>
      <div className={`${styles.taroQuestContainer} container`}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Трансформационная игра "Таро квест"!</h2>
          <p className={styles.desc}>
            Таро-квест – это психологический инструмент, который позволяет персонально и глубоко
            работать с бессознательными посланиями, стратегиями и сценариями каждого участника Игры.
            В качестве структуры Игры используются карты Таро, их порядок и значения, а в качестве
            основного метода работы – полевая практика.
          </p>
          <p className={styles.desc}>
            Игра показывает, где произошел сбой в естественном движении человека, позволяет
            восстановить доступ к силам, меняющим нашу жизнь.
          </p>
          <p className={styles.desc}>
            Целью Игры может быть как изменение конкретной жизненной ситуации так и наблюдение за
            процессом личного странствия без определенного намерения что-либо изменить.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={taro} alt="taro" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default TaroQuest;

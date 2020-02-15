import React from 'react';

import road from './img/roads.jpg';

import styles from './roads.module.scss';

function Roads() {
  return (
    <div className={styles.roads}>
      <div className={`${styles.roadsContainer} container`}>
        <div className={styles.imageContainer}>
          <img src={road} alt="road" className={styles.image} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>
            Психологическая игра <br /> «Дороги перемен»!
          </h2>
          <p className={styles.desc}>
            Игра о позитивных переменах в жизни, которая ответит на вопросы: Оставаться ли на одной
            работе или перейти на другую? Выходить ли из брака или нет? Куда направить свои силы,
            что бы больше зарабатывать? Переезжать ли в другую страну? Решаться ли на серьезные
            перемены? И многое другое! А так же даст возможность осознать какие недостатки -«ТЕНИ»
            мешают вам достичь своих целей.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roads;

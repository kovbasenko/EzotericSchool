import React from 'react';

import tarot from './img/tarot.jpg';
import Course from './Course';

import styles from './taro.module.scss';

function Taro() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={styles.tarot} id={1}>
        <div className={`${styles.tarotContainer} container`}>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.title}>Карты Таро</h2>
            <p className={styles.desc}>
              Карты Таро – это 78 древних карточных изображений, наполненные сакральными символами
              магии, астрологии и каббалы. Это тонкий инструмент, позволяющий заглянуть внутрь
              самого себя, это наша связь с подсознанием, это зеркало, которое отражает внутренние
              переживания и страхи, это ключ к нашим скрытым возможностям и желаниям. сознание
              человека.
            </p>
            <p className={styles.desc}>
              Сейчас можно с уверенностью сказать, что система арканов Таро – это и есть одна из
              систем классификации архетипов. И через соприкосновение с образами Таро – древними
              символами, у нас есть возможность через этот символьный ряд взаимодействовать с
              архетипами нашего бессознательного.
            </p>
            <p className={styles.desc}>
              Они служат мостом к еще неисчерпанным богатствам нереализованных смыслов коллективного
              бессознательного, призванного расширить и усилить сознание человека. Они открывают для
              нас эффективный ресурс мудрости нашей внутренней сущности.
            </p>
            <p className={styles.desc}>
              Работа с картами Таро подарит ценные инсайты всем, кто встал на путь индивидуации, и
              кто стремится к самопознанию и самореализации. Также, участники этой программы смогу
              ближе познакомиться со своими архетипами и понять, какие именно послания они хотят
              донести на данном этапе жизненного пути.
            </p>
            <button className={styles.button} onClick={() => scrollTo()}>
              Пройти обучение
            </button>
          </div>
          <div className={styles.imageContainer}>
            <img src={tarot} alt="tarot" className={styles.image} />
          </div>
        </div>
      </div>

      <Course />
    </>
  );
}

export default Taro;

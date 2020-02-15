import React from 'react';

import book from './img/book.jpg';

import styles from './psalmMagic.module.scss';

function PsalmMagic() {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.psalm} id={3}>
      <div className={`${styles.psalmContainer} container`}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Магия псалмов</h2>
          <p className={styles.desc}>
            Библия и Псалтырь в христианском мире имеет долгую и разнообразную историю влияния на
            различные события, политику, культуру, науку, право, религию, войны, мораль,
            сексуальность, и даже магию! На самом деле, наверное, нет ни одного аспекта нашей
            повседневной жизни, на который бы не повлияло в какой-то степени Слово Божье. В практике
            Hoodoo, Библия имеет несколько приложений.
          </p>
          <p className={styles.desc}>
            Они включают в себя: Библейские стихи как молитвы Из всех книг, которые входят в состав
            Библии, Псалтырь является, пожалуй, одним из самых популярных текстов, используемых в
            практике магии. Псалмы иногда применяются, как составные части заклинаний, а иногда
            достаточно прочтения только Псалма или нескольких Псалмов в определенном количестве или
            определенной последовательности, чтобы вызвать реальные изменения в окружающем мире.
          </p>
          <button className={styles.button} onClick={() => scrollTo()}>
            Пройти обучение
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={book} alt="psalm" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default PsalmMagic;

import React from 'react';

import about from './img/about.jpg';
import AboutMe from './AboutMe';

import styles from './about.module.scss';

function About() {
  return (
    <>
      <div className={styles.about}>
        <h2 className={styles.title}>Анна Кучеренко</h2>
        <div className={`${styles.aboutContainer} container`}>
          <div className={styles.imageContainer}>
            <img src={about} alt="about" className={styles.image} />
          </div>
          <div className={styles.descriptionContainer}>
            <ul className={styles.list}>
              <li className={styles.listItem}>Доктор Философии</li>
              <li className={styles.listItem}>Кандидат исторических наук</li>
              <li className={styles.listItem}>Преподаватель</li>
              <li className={styles.listItem}>Практический психолог</li>
              <li className={styles.listItem}>Игропрактик</li>
              <li className={styles.listItem}>Эзотерик, таролог, рунолог</li>
            </ul>
          </div>
        </div>
      </div>

      <AboutMe />
    </>
  );
}

export default About;

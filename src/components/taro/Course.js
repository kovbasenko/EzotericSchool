import React from 'react';

import course from './img/course.jpg';

import styles from './course.module.scss';

function Course() {
  return (
    <div className={styles.course}>
      <div className={`${styles.courseContainer} container`}>
        <div className={styles.imageContainer}>
          <img src={course} alt="course" className={styles.image} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Обучающий курс "Карты Таро в современном мире"</h2>
          <p className={styles.desc}>
            Это углубленный курс, который подходит как для новичков, так и для уже практикующих
            Таро. Программа этого курса познакомит вас с философско - психологическим смыслом
            арканов, трех колод - (Уэйта, Кроули и Марсельское) даст практический навык работы в
            аналитико-предсказательном ключе. В программу помимо изучения символики архетипов и
            практики, входит изучение мифологем, нумерологии, стихий, психотипов, а так же этика
            работы с клиентом.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;

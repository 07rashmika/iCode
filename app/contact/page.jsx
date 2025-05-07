import React from 'react';
import Button from '@components/ui/Button';
import Header from '@components/ui/Header.jsx';
import styles from '../styles/services.module.css'

const page = () => {
  const text = "Want to work with us? Just contact here!";
  return (
    <div className="page-container">
      <div className={styles.contact_container}>
        <Header head='Contact Us Here!' text={text}/>
        <div className={styles.contact_form}>
          <form action="#" className={styles.form}>
            <div className={styles.upper_form}>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' placeholder='samplemail@hotmail.com'/>

              <span></span>

              <label htmlFor="name">Name</label>
              <input type="text" name='name' placeholder='John'/>              
            </div>
            <div className={styles.down_form}>
              <label htmlFor="question">Question</label>
              <textarea name="question" id="question" rows={10} cols={50} className={styles.textarea}></textarea>

              <Button type='submit' text='Submit'/>
            </div>
          </form>
        </div>
        <div className={styles.contact_foot}>

        </div>
      </div>
    </div>
  )
}

export default page
import React from "react";
import styles from "../styles/service.module.css";
import Header from "../components/projects/header";

const service = () => {
  return (
    <>
    <Header />
      <section className="text-gray-600 body-font">
        <div className={styles.service}>
          <div className="container">
            <h1>ABOUT 털보클린</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default service;

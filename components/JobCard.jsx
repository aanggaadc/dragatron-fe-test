import React from "react";
import styles from "./JobCard.module.css";
import { FcNext } from "react-icons/fc";

export default function JobCard(props) {
  return (
    <div className={styles.job_card}>
      <div className={styles.job_title}>
        <h2>{props.title}</h2>
        <p>{props.location}</p>
      </div>
      <FcNext />
    </div>
  );
}

import React from "react";
import styles from './Teammember.module.css';
const TeammemberCard=({member})=>{
    return (
    <div className={styles.card}>
   <img src={member.imageUrl} alt="member image"/>
   <h1>{member.name}</h1>
   <h4>{member.role}</h4>
 <p>{member.description}</p>
    </div>
    );
};
export default TeammemberCard;
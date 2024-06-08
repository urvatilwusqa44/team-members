import React from "react";
import TeammemberCard from "./TeammemberCard";
import styles from './Teammember.module.css';
const Teammember=({teamMembers})=>{
    return(
        <div className={styles.container}>
            {teamMembers.map((element)=>{
                return <TeammemberCard member={element}/>
            })}
            
        </div>
    );
}
export default Teammember;
import { useRouter } from "next/router";
import styles from "./Card.module.css";

const Card = ({ name, phone, email, image, id }) => {
  const router = useRouter();
  return (
    <div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
      <div className={styles["card-header"]}>
        <img className={styles["card-img"]} src={image.url} alt={image.alt} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

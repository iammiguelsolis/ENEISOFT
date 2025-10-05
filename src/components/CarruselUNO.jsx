import React from "react";
import styles from "./CarruselUNO.module.css";

export function CarruselUNO({ items = [], width = "300px", height = "200px" }) {
  const quantity = items.length;

  return (
    <div
      className={styles.slider}
      style={{
        "--width": width,
        "--height": height,
        "--quantity": quantity,
      }}
    >
      <div className={styles.list}>
        {items.map((text, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ "--position": index + 1 }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

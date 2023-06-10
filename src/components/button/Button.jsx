import styles from "./Button.module.scss";

function Button(variant, label) {
  let buttonClass = "";

  if (variant === "primary") {
    buttonClass = styles.primary;
  } else if (variant === "secondary") {
    buttonClass = styles.secondary;
  }
  return <button className={buttonClass}>{label}</button>;
}

export default Button;

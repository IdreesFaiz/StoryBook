import { ComponentProps } from "react";
import clsx from "clsx";

import styles from './button.module.css'; 

export type ButtonProps = ComponentProps<'button'> & {  
    variant?: 'primary' | 'secondary' | 'destructive';
    size?: "small" | "medium" | "large";
} 
const Button = ({variant = 'primary',size = 'medium', className ,...props} : ButtonProps) => {
  const classes = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className
  );
  



  // If the variant is 'destructive', add an additional class
  if (variant === 'destructive') {
    classes = clsx(classes, styles.destructive);
  }

  return <button {...props}  className={classes} />;
};

export default Button;

  
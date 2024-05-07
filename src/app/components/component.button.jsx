const Button = ({
  className,
  children,
  containerClassName,
  type,
  disabled,
}) => {
  return (
    <div className={containerClassName}>
      <button className={className} type={type} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;

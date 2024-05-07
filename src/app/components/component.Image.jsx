const Image = ({ src, alt, containerClassName, imgClassName }) => {
  return (
    <div className={containerClassName}>
      <img className={imgClassName} src={src} alt={alt} />
    </div>
  );
};

export default Image;

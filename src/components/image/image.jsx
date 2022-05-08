import React from "react";

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '300px',
    height: '300px',
    overflow: 'hidden',
    borderRadius: '50%'
  },
  img: {
    width: '100%',
    // objectFit: 'cover',
    objectPosition: 'center'
  }
}

const Image = ({src, name}) => {
  return (
    <div
      style={styles.wrapper}
      className={'image-user'}>
      <img
        style={styles.img}
        src={src} alt={name}/>
    </div>
  );
};

export default Image;

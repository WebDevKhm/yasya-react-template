import React from 'react';

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '30px',
    height: '30px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    objectPosition: 'center',
  },
};

const Image = ({ src, name }) => {
  return (
    <div style={styles.wrapper} className={'image-user'}>
      <img style={styles.img} src={src} alt={name} />
    </div>
  );
};

export default Image;

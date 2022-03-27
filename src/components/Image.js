import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const Image = (props) => {
  const match = useMatch('/images/:id');
  const id = match.params.id;
  const { image } = props;
  const imgs = image.filter((img) => img.id === id);

  return imgs.map((img) => (
    <div
      key={img.id}
      style={{
        margin: '25px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{img.title}</h2>
      <img
        src={img.images.original.url}
        alt={img.title}
        width='100%'
        height='500'
        style={{
          borderRadius: '5px',
          boxShadow: '1px 1px 4px #777',
        }}
      />
      <div style={{ margin: '25px' }}>
        <Link to='/'>
          <h3 style={{ textTransform: 'uppercase', textAlign: 'center' }}>
            Home
          </h3>
        </Link>
      </div>
    </div>
  ));
};

export default Image;

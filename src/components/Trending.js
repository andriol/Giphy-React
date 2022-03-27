import React from 'react';
import { Link } from 'react-router-dom';

const Trending = (props) => {
  const imageList = props.images.map((image) => {
    return (
      <div
        key={image.id}
        style={{
          margin: '5px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to={`/images/${image.id}`}>
          <img
            src={image.images.original.url}
            width='200'
            height='200'
            alt={image.title}
            style={{ borderRadius: '5px', boxShadow: '1px 1px 4px #777' }}
          />
        </Link>
      </div>
    );
  });
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {imageList}
    </div>
  );
};

export default Trending;

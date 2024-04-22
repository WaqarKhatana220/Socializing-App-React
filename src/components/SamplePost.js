import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShareSquare } from '@fortawesome/free-solid-svg-icons'; // Importing required Font Awesome icons

const SamplePost = ({ author, avatar, date, content }) => (
  <div style={{ backgroundColor: '#f0f2f5', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
      <img src={avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '0.5rem' }} />
      <div>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{author}</p>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{date}</p>
      </div>
    </div>
    <p>{content}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
      <button style={{ border: 'none', background: 'none', cursor: 'not-allowed' }}>
        <FontAwesomeIcon icon={faHeart} style={{ color: '#666', marginRight: '0.5rem' }} /> Like
      </button>
      <button style={{ border: 'none', background: 'none', cursor: 'not-allowed' }}>
        <FontAwesomeIcon icon={faComment} style={{ color: '#666', marginRight: '0.5rem' }} /> Comment
      </button>
      <button style={{ border: 'none', background: 'none', cursor: 'not-allowed' }}>
        <FontAwesomeIcon icon={faShareSquare} style={{ color: '#666', marginRight: '0.5rem' }} /> Share
      </button>
    </div>
  </div>
);

export default SamplePost;

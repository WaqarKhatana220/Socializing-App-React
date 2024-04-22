import React, { useState } from 'react';

function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "johndoe",
    friends: 567,
    photos: 123,
    posts: 345,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nulla eu convallis venenatis. Nam vehicula suscipit ex, sit amet tempus elit scelerisque ut. Vestibulum id scelerisque mi. Morbi vitae dolor in elit venenatis dignissim nec nec purus. Nulla in lacinia nibh. Sed vulputate sagittis mauris, eget dignissim est tincidunt vel. Duis et tortor elit. Pellentesque malesuada vehicula nisl, ut eleifend arcu venenatis eu. Vestibulum ac eros tellus."
  });
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [editedAbout, setEditedAbout] = useState(userData.about);

  const handleEditAbout = () => {
    setIsEditingAbout(true);
  };

  const handleSaveAbout = () => {
    setUserData({ ...userData, about: editedAbout });
    setIsEditingAbout(false);
  };

  const handleChangeAbout = (e) => {
    setEditedAbout(e.target.value);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img src="/profilePhoto.jpg" alt="Profile" style={{ borderRadius: '50%', marginRight: '1rem', width: '150px', height: '150px' }} />
        <div>
          <h2>{userData.name}</h2>
          <p>@{userData.username}</p>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p><strong>Friends:</strong> {userData.friends}</p>
        <p><strong>Photos:</strong> {userData.photos}</p>
        <p><strong>Posts:</strong> {userData.posts}</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h3>About</h3>
        {isEditingAbout ? (
          <div>
            <textarea
              value={editedAbout}
              onChange={handleChangeAbout}
              style={{ width: '100%', minHeight: '100px', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
            />
            <button onClick={handleSaveAbout} style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>Save</button>
          </div>
        ) : (
          <div>
            <p>{userData.about}</p>
            <button onClick={handleEditAbout} style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', background: '#28a745', color: 'white', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>Edit</button>
          </div>
        )}
      </div>

    </div>
  );
}

export default ProfilePage;

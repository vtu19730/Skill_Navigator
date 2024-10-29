import React, { useState } from "react";

const ProfilePage = () => {
  // State to manage profile details
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    position: "",
    bio: "",
    skills: "",
  });

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle edit/save button click
  const handleButtonClick = () => {
    if (isEditing) {
      alert("Profile saved successfully!");
      // Here you could also send data to a server or update a database.
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Profile</h1>
      
      {/* Profile Input Fields */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          disabled={!isEditing}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          disabled={!isEditing}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Position:</label>
        <input
          type="text"
          name="position"
          value={profile.position}
          onChange={handleChange}
          disabled={!isEditing}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Bio:</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          disabled={!isEditing}
          style={{ ...styles.input, height: "60px" }}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Skills:</label>
        <input
          type="text"
          name="skills"
          value={profile.skills}
          onChange={handleChange}
          disabled={!isEditing}
          style={styles.input}
        />
      </div>

      {/* Button to toggle edit mode */}
      <button onClick={handleButtonClick} style={styles.button}>
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
    </div>
  );
};

// CSS styling in JavaScript object format
const styles = {
  container: {
    width: "60%",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "center",
  },
};

export default ProfilePage;

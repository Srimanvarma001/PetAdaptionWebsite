import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [breedError, setBreedError] = useState("");

  const nameInputRef = useRef(null);
  const breedInputRef = useRef(null);

  const handleSubmit = () => {
    let hasError = false;

    // Check if name has at least 3 words
    if (name.trim().length < 3) {
      setNameError("Name must contain at least 3 words");
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
      hasError = true;
    } else {
      setNameError("");
    }

    // Check if breed has at least 3 words
    if (breed.trim().length < 3) {
      setBreedError("Breed must contain at least 3 words");
      // Only focus breed if name passed validation
      if (hasError ) {

      }else if( breedInputRef.current){

        breedInputRef.current.focus();

      }
      hasError = true;
    } else {
      setBreedError("");
    }

    if (!hasError) {
      navigate("/next");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "#c59771bd",
        margin: "10px 70px 30px 70px",
        height: "85vh",
      }}
    >
      <div>TYPE OF PET</div>
      <input
        placeholder="Dog/cat"
        value={petType}
        onChange={(e) => setPetType(e.target.value)}
      />

      <div>Breed</div>
      <input
        placeholder="Type of Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        ref={breedInputRef}
      />
      {breedError && (
        <div style={{ color: "red", fontSize: "14px" }}>{breedError}</div>
      )}

      <div>Your Name</div>
      <input
        placeholder="Your sweet Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={nameInputRef}
      />
      {nameError && (
        <div style={{ color: "red", fontSize: "14px" }}>{nameError}</div>
      )}

      <div>Phone No</div>
      <input placeholder="+91" />

      <div>Email</div>
      <input placeholder="@gmail.com" />

      <div>
        <button onClick={handleSubmit} style={{ backgroundColor: "green" }}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default HomePage;

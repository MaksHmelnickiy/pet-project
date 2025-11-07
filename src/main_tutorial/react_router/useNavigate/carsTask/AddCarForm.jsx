import './AddCarForm.css';
import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom"

export const AddCarForm = () => {
  const navigate = useNavigate()
  const {onAddCar} = useOutletContext()
  const onSubmit = (e) => {
    e.preventDefault()
    onAddCar({model: e.target.elements['model'].value, release: e.target.elements['release'].value})
  }

  return (
    <form className="car-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Model:</label>
        <input type="text" name='model' placeholder="Model" />
      </div>
      <div className="form-group">
        <label>Release Date:</label>
        <input type="text" name='release' placeholder="Car release date" />
      </div>
      <button type='button' className="submit-btn s" onClick={() => navigate(-1)}>Back</button>
      <button type="submit" className="submit-btn">Create</button>
    </form>
  );
};

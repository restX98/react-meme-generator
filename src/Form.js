import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isPublic: false,
    employment: "",
    favColor: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        placeholder="Leave a comment"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <input
        type="checkbox"
        name="isPublic"
        id="isPublic"
        onChange={handleChange}
        checked={formData.isPublic}
      />
      <label htmlFor="isPublic">Is public?</label>{" "}
      <fieldset>
        <legend>Employment Status</legend>
        <input
          type="radio"
          name="employment"
          id="unemployed"
          onChange={handleChange}
          value="unemployed"
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="part-time"
          onChange={handleChange}
          value="part-time"
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-Time</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="full-time"
          onChange={handleChange}
          value="full-time"
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-Time</label>
      </fieldset>
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Form;

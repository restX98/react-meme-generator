import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isPublic: false,
  });
  console.log(formData);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <form>
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
    </form>
  );
}

export default Form;

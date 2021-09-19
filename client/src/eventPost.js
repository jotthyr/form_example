import axios from "axios"

const eventPost = async (firstName, lastName, email, date) => {
  try {
    return await axios.post('http://127.0.0.1:4000/api/form/', {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "date": date
    })
  }
  catch (error) {
    console.log(error)
  }
}

export default eventPost;

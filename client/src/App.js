import axios from "axios";

function App() {
  const handleAddUser = () => {
    const userData = {
      email:'abcd@gmail.com',
      password: 'Password'
    }

    axios({
      url: 'http://localhost:5000/graphql',
      method: 'POST',
      data: {
        query:`
          mutation {
            addUser(userInput: {
              email: "${userData.email}"
              password: "${userData.password}"
            }){
              _id
              email
              password
            }
          }
        `
      }
    }).then(res => {
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  } 

  return (
    <div className="App">
      <button onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
}

export default App;

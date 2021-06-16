//import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './components/form.css';

function App() {
  return (
    <div style={{                 
      backgroundImage: `url("background.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"     
    }}>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
        <h4>Contacts Form</h4>
          <ContactForm />
        </div>

        <div className="col-md-7">
        <h4>Contacts List</h4>
          <ContactList />
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;

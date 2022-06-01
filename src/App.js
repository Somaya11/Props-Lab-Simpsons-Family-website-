import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import Homer from './homer.jpg'
import Bart from './bart.png'
import Lisa from './lisa.png'
import Maggie from './maggie.png'
import Marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              
              <ProfileCard pic={Homer} 
                 name = "Homer Simpson"
                 description = "loud, and ignorant"
                 email = "homer@simpsons.com"
              />
              <ProfileCard pic={Lisa} 
               name = "Lisa Simpson"
               description = "smart, and a feminist"
               email = "lisa@simpsons.com"
               />
              <ProfileCard pic= {Maggie}
                 name = "Maggie Simpson"
                 description = "stubbon, and acquisitive"
                 email = "maggie@simpsons.com"
              />
              <ProfileCard pic={Marge}
                 name = "Marge Simpson"
                 description = "Business savvy, and kind hearted "
                 email = "marge@simpsons.com"
              />
              <ProfileCard pic={Bart} 
                  name = "Bart Simpson"
                  description = "Michievous, and clever"
                  email = "bart@simpsons.com"
              />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;

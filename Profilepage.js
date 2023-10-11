
import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.css'; 


export const Profilepage = ({ onFormSubmit }) => {
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();

    
    navigate('/thank-you');
  }
  return (
    <div>
    <header className="header">
      <h1>My Profile Page!</h1>
      <img
        src="./Snapchat-2107934751.jpg"
        alt="Profile Photo"
        width="250"
        height="400"
      />
    </header>
    <h1>Ishwari Datir</h1>
    <hr />
    <main className="main">
      <section>
        <h2>About Me:</h2>
        <p>
          Hello! I'm Ishwari Datir, a web developer and technology
          enthusiast. I have a passion for building creative and
          user-friendly websites that make a positive impact. Apart from
          coding, I enjoy debate and exploring the latest tech trends.
        </p>
        <hr />
        <marquee width="100%" direction="side" height="100px">
          I love reading books📚, playing piano🎹, and swimming🏊.
        </marquee>
        <hr />
      </section>
      <section>
        <fieldset>
          <legend>
            <h2>Education:</h2>
          </legend>
          <table className="table">
            <tr>
              <th></th>
              <th scope="col">Semester</th>
              <th scope="col">Grade</th>
            </tr>
            <tr>
              <td>1</td>
              <td>SSC</td>
              <td>97.2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>High School Diploma</td>
              <td>94.33</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bachelor of Engineering</td>
              <td>Agr-9.54</td>
            </tr>
          </table>
        </fieldset>
      </section>
      <article>
        <fieldset>
          <legend>
            <h2>Skills:</h2>
          </legend>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Django</li>
            <li>Python</li>
            <li>Content Writing</li>
          </ul>
        </fieldset>
      </article>
      <section>
        <fieldset>
          <legend>
            <h2>Contact Information:</h2>
          </legend>
          <table className="table">
            <tr>
              <td>Email:</td>
              <td>ishwari@example.com</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>+91 123-456-7890</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>
                <a href="https://www.example.com">https://www.example.com</a>
              </td>
            </tr>
          </table>
        </fieldset>
      </section>
      <section>
        <fieldset>
          <legend>
            <h2>Reference Video:</h2>
          </legend>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e_04ZrNroTo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </fieldset>
      </section>
      <section>
        <fieldset>
          <legend>
            <h2>Contact Form:</h2>
          </legend>
          <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required></input><br></br>
            <label>Email</label>
            <input type="email" className='form-control' required></input><br></br>
            <label>Phone Number</label>
            <input type="tel" className='form-control' required></input><br></br>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type='submit' className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
          </form>
        </fieldset>
      </section>
    </main>
    <footer className="footer">
      <address className="address">
        <strong>Contact:</strong> Ishwari Datir | Email: ishwari@email.com |
        Phone: +91 123-456-7890
      </address>
    </footer>
  </div>
  );
}

export default Profilepage;

    

import logo from './logo.svg';
import './App.css';
import Page from './components/Page';


import img_about from './components/images/about-us.jpg'
import img_services from './components/images/services.jpg'
import img_blog from './components/images/blog.png'
import img_api  from './components/images/api.png'
import img_contact from './components/images/contact.webp'

function App() {
  const pages = [
    {title:"About Us",description:"About the company",image:img_about,link:"about-us"},
    {title:"Services",description:"What we offer: html web design",image:img_services,link:"services"},
    {title:"Blog",description:"Read our latest articles",image:img_blog,link:"blog"},
    {title:"API",description:"Buy our api",image:img_api,link:"api"},
    {title:"Contact Us",description:"Fill the form",image:img_contact,link:"contact-us"},
    {title:"Support",description:"Support Page",image:img_contact,link:"contact-us"}
  ]
  return (
    <div className="App">
        {pages.map(function(value){return <Page title={value.title} description={value.description} image={value.image} link={value.link} />})}
        
    </div>
  );
}

export default App;

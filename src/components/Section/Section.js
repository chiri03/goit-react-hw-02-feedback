import './Section.css'

export const Section = ({ title, children }) => { 
    return (
    <div className="Section" >
            <h2 className="title">{title}</h2>
             {children}
   
  </div>
);
}
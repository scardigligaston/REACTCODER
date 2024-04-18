import CardWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import "./NavBar.css";

function NavBar (){
    return (
        <div className="ContainerNavBar">
            <div>
            <CategoryList/>
            </div>
        
        
        <div className="ContainerCart">
            <CardWidget/>
            </div>
        </div>
        
        
       
    );
};

export default NavBar;
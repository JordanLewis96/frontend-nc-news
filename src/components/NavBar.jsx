import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <Link className="cookingButton" to="/cooking">Cooking</Link>
        <Link className="codingButton" to="/coding">Coding</Link>
        <Link className="footballButton" to="/football">Football</Link>
    </nav>
  )
}
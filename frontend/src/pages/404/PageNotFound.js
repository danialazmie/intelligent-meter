import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      Page not found!
      <Link to={"/"} className="h-12 flex items-center gap-3 pl-0.5">
        <span className="pt-0.5">Go to Dashboard</span>
      </Link>
    </div>
  );
}

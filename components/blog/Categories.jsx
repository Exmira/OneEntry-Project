const categories = [
  { id: 1, text: "Archive (3)" },
  { id: 2, text: "Branding (6)" },
  { id: 3, text: "Company (2)" },
  { id: 4, text: "Design (1)" },
  { id: 5, text: "Business (4)" },
  { id: 6, text: "Modern (1)" },
];
export default function Categories() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Categories</h4>
      <div className="sidebar__cat-list">
        <ul className="list-wrap">
          {categories.map((link) => (
            <li key={link.id}>
              <a href="#">{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

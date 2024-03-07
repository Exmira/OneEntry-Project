const tags = [
  { id: 1, text: "Agency" },
  { id: 2, text: "Awards" },
  { id: 3, text: "Marketing" },
  { id: 4, text: "Brand" },
  { id: 5, text: "Contemporary" },
  { id: 6, text: "Design" },
  { id: 7, text: "Education" },
  { id: 8, text: "Business" },
  { id: 9, text: "Modern" },
];

export default function Tags() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Tags</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tags.map((category) => (
            <li key={category.id}>
              <a href="#">{category.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

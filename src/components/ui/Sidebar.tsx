export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={`h-screen p-4 ${className}`}>
      <ul className="menu">
        <li><a>Dashboard</a></li>
        <li><a>Users</a></li>
        <li><a>Settings</a></li>
      </ul>
    </aside>
  );
}

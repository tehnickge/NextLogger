import Link from "next/link";

const arrlinks = [
  {
    href: "users",
    title: "users",
  },
  {
    href: "chats",
    title: "chatroom",
  },
  {
    href: "error",
    title: "error",
  },
  {
    href: "message",
    title: "message",
  },
  {
    href: "userchatrooms",
    title: "userchatrooms",
  },
];

const NavigateComponent = () => {
  return (
    <div className="flex justify-center items-center bg-indigo-950 py-4">
      <ul className="flex justify-center items-center space-x-4">
        {arrlinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigateComponent;

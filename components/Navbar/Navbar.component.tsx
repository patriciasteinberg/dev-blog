import Link from 'next/link';

interface IUser {
  photoURL: string;
}

interface INavBar {
  user?: IUser,
  username?: IUser
}

const Navbar = ({ user, username }: INavBar) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            {user && (
              <li>
                <Link href={`/${username}`}>
                  <img src={user.photoURL} />
                </Link>
              </li>
            )}
          </>
        )}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

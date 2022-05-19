const user = JSON.parse(localStorage.getItem('user'));
export default function () {
  return user ? { status: { loggedIn: true }, user } : { status: { }, user: null };
}

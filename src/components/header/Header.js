export default function Header() {
  const currentHour = new Date().getHours()
  const message = currentHour < 5 ? "Not tired yet?"
  : currentHour < 12 ? "Good Morning!" 
  : currentHour < 18 ? "Good Afternoon!"
  : "Good Evening! "
  return (
    <div>
      <p>{message} Marvel Fans!</p>
      <h2>Marvel Universe Team</h2>
    </div>
  )

}
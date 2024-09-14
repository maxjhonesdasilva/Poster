import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar=""
        name="Max Jhones de Souza"
        bio="Full-stack javascript developer at Acme Inc."
        email="john.doe@email.com"
        phone="+5527995235345"
        githubUrl="https://github.com/maxjhonesdasilva"
        linkedinUrl="https://www.linkedin.com/in/max-jhones-de-souza-silva-290ab3307/"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}

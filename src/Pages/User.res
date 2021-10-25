/**
 * User account page
 */
@react.component
let make = () => {
  <>
    <Header />
    <main className="main bg-dark">
      <HeroUser />
      <Accounts />
    </main>
    <Footer />
  </>
}
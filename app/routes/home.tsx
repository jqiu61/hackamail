import type { Route } from "./+types/home";
import { Header, GridItem } from "../components/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hackamail" },
    { name: "description", content: "A YSWS to send mail and make friends!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header 
        title="Hackamail" 
        desc="a YSWS to send mail and make friends!"
      />
      
      <main>
        <GridItem
          title=""
          content={
            <p>
              Hackamail is a Hack Club YSWS Program. Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world. Founded in 2014 by 16-year-old Zach Latta, Hack Clubs are now in nearly 400 high schools with 10,000 students each year.
            </p>
          }
          gridColumn="1 / 3"
          backgroundColor="#c0e0ff"
        />

        <GridItem
          title="Join #hackmail on Slack!"
          content={
            <button>Bring me there</button>
          }
          gridColumn="3 / 4"
          backgroundColor="#bce2ad"
          id="slack"
        />

        <GridItem
          title="How to Start?"
          content={
            <ol>
              <li>Join #hackmail on Slack</li>
              <li>Find friend using friend finder</li>
              <li>blah blah blah blah...</li>
            </ol>
          }
          gridColumn="1 / 4"
          backgroundColor="#9cc9f5"
          id="how"
        />
      </main>
    </div>
  );
}
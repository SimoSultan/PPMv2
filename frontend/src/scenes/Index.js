import React from "react";
import MainTitle from "../components/Headers/MainTitle";
import HeroButton from "../components/Buttons/HeroButton";

export default function Index() {
  return (
    <div>
      <section>
        <MainTitle />
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="container has-text-centered">
                <h1 className="title">Cool analytics with your music!</h1>
                <div className="buttons are-large is-centered">
                  <HeroButton
                    href={"http://localhost:5000/login"}
                    colour={"primary"}
                    name={"Log in"}
                  />
                  <HeroButton href={""} colour={"outlined"} name={"Sign up"} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="container has-text-centred">
                <h1 className="title">Basic visualizations of your music</h1>
                <div className="buttons are-large is-centered">
                  <HeroButton href={"/guest"} colour={"dark"} name={"Guest"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

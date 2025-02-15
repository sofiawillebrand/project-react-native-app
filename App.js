import React, { useState } from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

import Theme from "./Theme";
import StartingPage from "./components/StartingPage";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import Loading from "./components/Loading";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textYellow};
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.View`
  width: 90%;
`;

const App = () => {
  // state to handle which component is loaded
  const [currentPage, setCurrentPage] = useState("StartPage");
  const [loading, setLoading] = useState(false);
  // font is downloaded from here: https://www.fontspace.com/sf-distant-galaxy-font-f6436
  // How to use custom font in react native: https://blog.jsdisco.dev/using-custom-fonts-with-expo
  let [fontsLoaded] = useFonts({
    SWFont: require("./assets/SfDistantGalaxy.ttf"),
    SWFontHollow: require("./assets/SfDistantGalaxyHollow.ttf"),
  });

  // while the fonts are loading, show the loading-spinner
  if (!fontsLoaded) {
    return (
      <Theme>
        <Loading />
      </Theme>
    );
  }

  return (
    <Theme>
      <Container>
        {loading && <Loading />}
        <InnerContainer>
          {currentPage === "StartPage" && (
            <StartingPage setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "Planets" && (
            <Planets
              setCurrentPage={setCurrentPage}
              setLoading={setLoading}
            />
          )}
          {currentPage === "Species" && (
            <Species
              setCurrentPage={setCurrentPage}
              setLoading={setLoading}
            />
          )}
          {currentPage === "Starships" && (
            <Starships
              setCurrentPage={setCurrentPage}
              setLoading={setLoading}
            />
          )}
          {currentPage === "Vehicles" && (
            <Vehicles
              setCurrentPage={setCurrentPage}
              setLoading={setLoading}
            />
          )}
        </InnerContainer>
      </Container>
    </Theme>
  );
};

export default App;

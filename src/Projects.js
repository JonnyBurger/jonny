import React from "react";
import Project from "./Project";
import Bestande from "./previews/Bestande";
import AnySticker from "./previews/AnySticker";
import Remotion from "./previews/Remotion";

export default () => {
  return (
    <div style={{ margin: "auto" }}>
      <Project
        timeline="2021-"
        title="Remotion"
        link="https://remotion.dev"
        feature={<Remotion />}
        description="Programmatic video creation"
        accomplishments={[
          "Developer tool for creating videos programmatically",
          "14'000+ Github stars",
          "Community of hundreds of Remotion developers",
        ]}
      />
      <Project
        timeline="2018–2022"
        title="AnySticker"
        link="https://anysticker.com"
        feature={<AnySticker />}
        description="WhatsApp and Instagram stickers"
        accomplishments={[
          "App for creating custom WhatsApp and Instagram stickers",
          "iOS and Android app",
          "Over 150'000 downloads",
        ]}
      />
      <Project
        timeline="2016–2022"
        title="Bestande"
        link="https://bestande.ch"
        feature={<Bestande />}
        description="Student app for University of Zurich"
        accomplishments={[
          "Student app for the University of Zurich - more than 20'000 downloads",
          "Apps for iOS, Android and Web",
          "60'000 course ratings and 50'000 chat messages",
        ]}
      />
    </div>
  );
};

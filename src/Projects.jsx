import React from "react";
import Project from "./Project";
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
          "58'000+ Github stars",
          "Community of hundreds of Remotion developers",
        ]}
      />
    </div>
  );
};

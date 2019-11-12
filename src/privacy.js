import React from "react";
import styled from "styled-components";

const Subtitle = styled.h2`
  font-family: Roboto Condensed;
  font-size: 15px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  line-height: 24px;
`;

export default () => {
  return (
    <div style={{ width: 800, margin: "auto" }}>
      <Paragraph>
        Datum des Inkrafttretens: November 11, 2019 Jonny Burger Hacker Company
        ("wir", "uns", "unser" usw.) betreibt die Website https://jonny.io und
        https://pingpongtische.ch (nachstehend als "Dienst" bezeichnet). Diese
        Seite enthält Informationen zu der Art und Weise, auf welche wir
        personenbezogene Daten erfassen, nutzen und offenlegen, wenn Sie unseren
        Dienst nutzen, sowie zu den Optionen, die Ihnen im Zusammenhang mit
        diesen Daten zur Verfügung stehen. Wir nutzen Ihre Daten zur
        Bereitstellung und Verbesserung unseres Dienstes. Durch Inanspruchnahme
        des Dienstes erklären Sie sich mit der Erfassung und Nutzung von Daten
        durch uns nach Maßgabe dieser Richtlinie einverstanden. Soweit in dieser
        Datenschutz-Richtlinie nicht jeweils etwas anderes angegeben ist, kommt
        den in dieser Datenschutz-Richtlinie vorkommenden Begriffen jeweils
        dieselbe Bedeutung zu, die diesen in unseren Allgemeinen
        Geschäftsbedingungen (Terms and Conditions) zugewiesen wurde.
      </Paragraph>
      <Subtitle>Begriffsbestimmungen</Subtitle>
      <Paragraph>
        <ul>
          <li>
            Dienst: Der Dienst ist die von Jonny Burger Hacker Company
            betriebene Website https://jonny.io und die App Pingpong-Tische.
          </li>
        </ul>
      </Paragraph>
      <Subtitle>Erfassung und Nutzung von Daten</Subtitle>
      <Paragraph>
        Beim Hochladen von Pingpongtischen werden die hochgeladenen Daten
        erfasst und Jonny Burger Hacker Company wird das Recht zur Nutzung
        dieser Daten übertragen.
      </Paragraph>
      <Subtitle>Tracking und Cookies</Subtitle>
      <Paragraph>
        Anonymisierte und unpersönliche Nutzungsstatistiken werden erhoben und
        an Jonny Burger Hacker Company gesendet. Es findet kein Tracking durch
        Drittanbieter statt.
      </Paragraph>
      <Subtitle>Kontakt</Subtitle>
      <Paragraph>
        Falls Sie Fragen zu dieser Datenschutz-Richtlinie haben, können Sie wie
        folgt Kontakt zu uns aufnehmen:
        <ul>
          <li>Per E-Mail: hi@jonny.io</li>
          <li>Telefonisch: 0764498660</li>
          <li>Per Post: Naglerwiesenstrasse 88, 8049 Zürich</li>
        </ul>
      </Paragraph>
    </div>
  );
};

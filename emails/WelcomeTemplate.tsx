import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import { CSSProperties } from "react";

type Props = {
  name: string;
};

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text style={heading} className="font-bold">
              Hello, {name}!
            </Text>
            <Link href="https://github.com/MBATheGamer">Github</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;

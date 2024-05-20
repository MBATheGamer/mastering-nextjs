import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

type Props = {
  name: string;
};

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello, {name}!</Text>
          <Link href="https://github.com/MBATheGamer">Github</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;

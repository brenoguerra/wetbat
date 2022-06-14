import { 
  Container, 
  ImageContent,
  TextContent,
  TopTextContent,
  MessageContent,
} from './styles'

interface LeadProps {
  image_url: string;
  name: string;
  message: string;
  date: string;
}

export const Lead = ({ image_url, name, message, date }: LeadProps) => {
  return (
    <Container>
      <ImageContent>
        <img src={image_url} alt='User profile' />
      </ImageContent>

      <TextContent>
        <TopTextContent>
          <p>{name}</p>
          <label>{date}</label>
        </TopTextContent>

        <MessageContent>
          <label>{message}</label>
        </MessageContent>
      </TextContent>
    </Container>
  )
}
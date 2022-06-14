import { FaCommentAlt } from 'react-icons/fa'


import { 
  Container, 
  ImageContent,
  TextContent,
} from './styles'

interface MessageProps {
  image_url: string;
  name: string;
  message: string;
}

export const Message = ({ image_url, name, message }: MessageProps) => {
  return (
    <Container>
      <ImageContent>
        <img src={image_url} alt='User profile' />
      </ImageContent>

      <TextContent>
          <p>{name}</p>
          <label>{message}</label>
      </TextContent>

      <FaCommentAlt fontSize={32} color={'#32AFA9'} />
    </Container>
  )
}